import mongoose, { Document } from "mongoose";

interface CreatedTeam extends Document {
  idRef: number;
  type: string;
  firstname: string;
  lastname: string;
  photo: string;
  teamlogo: string;
}

const CreatedTeamSchema = new mongoose.Schema({
  idRef: {
    type: Number,
    required: true,
  },
  firstname: {
    type: String,
    required: true,
  },
  lastname: {
    type: String,
    required: true,
  },
  photo: {
    type: String,
    required: true,
  },
  position: {
    type: String,
    required: true,
  },
  teamlogo: {
    type: String,
    required: true,
  },
  rating: {
    type: String,
    required: true,
  },
});

export default mongoose.model<CreatedTeam>("CreatedTeam", CreatedTeamSchema);
