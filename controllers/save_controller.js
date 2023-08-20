import save_movie from "../models/save_movie.js";
import Movie from "../models/movie_model.js";
export const getAllSaveMovie = async (req, res) => {
  try {
    const movies = await save_movie.find({}).populate("saveMovie");
    return res.status(200).json({ data: movies });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
export const postSaveMovie = async (req, res) => {
  const id = req.params.id;
  console.log(`jdnsan ${id}`);
  // const { saveMovie } = req;

  const saveMovies = new save_movie({
    saveMovie: id,
  });

  try {
    await saveMovies.save();
  } catch (err) {
    console.log(err);
  }
  res.status(200).json({ data: saveMovies });
};
