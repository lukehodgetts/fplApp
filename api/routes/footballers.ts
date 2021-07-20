import {
  NextFunction,
  RequestHandler,
  Router,
  Request,
  Response,
} from "express";
import Footballer from "../models/Footballer";
const router = Router();

//get all
router.get("/", async (req, res) => {

});

//get one
router.get("/:id", (req, res) => {
  res.send("id " + req.params.id);
});

//create one
router.post("/", async (req, res) => {
  const footballer = new Footballer({
    firstName: "Bodon",
    lastName: "Bonk",
  });

  await footballer.save();

  res.send(footballer);
});

//delete one
router.get("/:id", (req, res) => {});

export default router;
