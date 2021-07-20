import mongoose, { Document } from "mongoose";

interface Favourite extends Document {
  idRef: number;
  type: string;
}

const FavouriteSchema = new mongoose.Schema({
  idRef: {
    type: Number,
    required: true,
  },
  type: {
    type: String,
    required: true,
  }
});

export default mongoose.model<Favourite>("Favourite", FavouriteSchema);

// import bodon from 'bodthing'
// const bodon = require('bodthing')

// export default bidin;
// module.exports = bidin;
