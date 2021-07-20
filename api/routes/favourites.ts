import {
  NextFunction,
  RequestHandler,
  Router,
  Request,
  Response,
} from "express";
import Favourite from "../models/Favourite";
const router = Router();

const getFavourites = async (type:string)=>{

  return await Favourite.find({type})

}

//get all players
router.get("/players", async (req, res) => {

  const favourites = await getFavourites("player")

  res.send(favourites)
});

//get all teams
router.get("/teams", async (req, res) => {

  const favourites = await getFavourites("team")

  res.send(favourites)
});

//create one
router.post("/", async (req, res) => {

  const {idRef, type} = req.body

  const foundPlayer = await Favourite.findOne({idRef, type})

  if (foundPlayer) {
    res.send({data: foundPlayer, message:"already in favourites"})
    return
  }

  const favourite = new Favourite({
    idRef,
    type
  });

  await favourite.save();

  res.send({data: favourite, message:"added favourite"});
});

//delete one
router.delete("/:type/:idRef", async (req, res) => {

  const type = req.params.type

  const idRef = parseInt(req.params.idRef)

  const foundFavourite = await Favourite.findOne({type, idRef})

  if (foundFavourite) {
    await foundFavourite.delete()
    res.send({data: {idRef}})
  } else {
    res.status(404).send({message: "favourite not found"})
  }
});

export default router;
