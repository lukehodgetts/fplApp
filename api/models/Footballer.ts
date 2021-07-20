import mongoose, { Document } from "mongoose";

interface Footballer extends Document {
  firstName: string;
  lastName: string;
}

const FootballerSchema = new mongoose.Schema({
  firstName: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
    required: true,
  },
  // age: {
  //   type: Number,
  //   required: true,
  // },
  // birth: {
  //   place: {
  //     type: String,
  //     required: true,
  //   },
  //   country: {
  //     type: String,
  //     required: true,
  //   },
  //   date: {
  //     type: String,
  //     required: true,
  //   },
  // },
  // weight: {
  //   type: String,
  //   required: true,
  // },
  // height: {
  //   type: String,
  //   required: true,
  // },
});

export default mongoose.model<Footballer>("Footballer", FootballerSchema);

// import bodon from 'bodthing'
// const bodon = require('bodthing')

// export default bidin;
// module.exports = bidin;
