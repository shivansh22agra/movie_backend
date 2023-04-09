import save_movie from "../models/save_movie.js";
import Movie from "../models/movie_model.js";
export const getAllSaveMovie = async (req, res) => {
  try {
    const movies = await save_movie.find({}).populate('saveMovie');
    return res.status(200).json({ data: movies });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
export const postSaveMovie = async (req, res) => {
  //  const id = req.param.id;
  const { saveMovie } = req.body;

  const saveMovies = new save_movie({
    saveMovie,
  });

  try {
    await saveMovies.save();
    // saveMovie = await Movie.findById("64213f06d64a6df006704616")
    //   .populate("saveMovies")
    //   .exec((err, saveMovies) => {
    //     console.log("populated" + saveMovies);
    //   });
  } catch (err) {
    console.log(err);
  }
  res.status(200).json({ data: saveMovie });
};
