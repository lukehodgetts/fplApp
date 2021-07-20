import {
  NextFunction,
  RequestHandler,
  Router,
  Request,
  Response,
} from "express";
import CreatedTeam from "../models/CreatedTeam";
const router = Router();

const getCreatedTeam = async () => {
  return await CreatedTeam.find();
};

//get all
router.get("/", async (req, res) => {
  const team = await getCreatedTeam();

  res.send(team);
});

//add to team
router.post("/", async (req, res) => {
  const {
    idRef,
    type,
    firstname,
    lastname,
    photo,
    position,
    teamlogo,
    rating,
  } = req.body;

  const foundPlayer = await CreatedTeam.findOne({ idRef });

  let teamFull = false;
  if ((await CreatedTeam.count()) == 18) {
    teamFull = true;
  }

  if (teamFull) {
    res.send({message: "team full"})
    return
  }

  if (foundPlayer) {
    res.send({ data: foundPlayer, message: "already in team" });
    return;
  }

  const createdTeam = new CreatedTeam({
    idRef,
    type,
    firstname,
    lastname,
    photo,
    position,
    teamlogo,
    rating,
  });

  await createdTeam.save();

  res.send({ data: createdTeam, message: "added to team" });
});

//delete from team
router.delete("/:idRef", async (req, res) => {
  const idRef = parseInt(req.params.idRef);

  const foundCreatedTeam = await CreatedTeam.findOne({ idRef });

  if (foundCreatedTeam) {
    await foundCreatedTeam.delete();
    res.send({ data: { idRef } });
  } else {
    res.status(404).send({ message: "team player not found" });
  }
});

export default router;
