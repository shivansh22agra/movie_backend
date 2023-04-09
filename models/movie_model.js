import mongoose from "mongoose";
 const Schema = mongoose.Schema;
const movieSchema = new Schema({
  name: {
    type: String,
  },
  image: {
    type: String,
  },
 
});
export default mongoose.model("Movie", movieSchema);