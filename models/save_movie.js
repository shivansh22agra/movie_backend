import mongoose from "mongoose";
import Movie from "../models/movie_model.js";

const Schema = mongoose.Schema;
const saveSchema = new Schema({
  saveMovie: 
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Movie',
    },

});
export default mongoose.model("saveMovie", saveSchema);
