import express from "express";
import mongoose from "mongoose";
import cors from "cors"
import { config } from "dotenv";
import footballerRoutes from "./routes/footballers";
import favouriteRoutes from "./routes/favourites";
import createdTeamRoutes from "./routes/createdTeams"

config();
const app = express();
app.use(cors())

mongoose.connect(process.env.MONGODB_URL!, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
const db = mongoose.connection;
db.on("error", (error) => console.error(error));
db.once("open", () => console.log("connected"));

app.use(express.json());

app.use("/footballers", footballerRoutes);
app.use("/favourites", favouriteRoutes);
app.use("/createdTeams", createdTeamRoutes);

app.listen(3001, () => console.log("server started"));
