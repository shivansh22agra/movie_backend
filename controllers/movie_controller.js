import Movie from "../models/movie_model.js";
export const getAllmovies = async (req, res) => {
  let movies;
  try {
    movies = await Movie.find({});
  } catch {
    res.status(500).json({ message: err.message });
  }
  return res.status(200).json({ data: movies });
};
export const postmovie = async (req, res) => {
  const { name, image } = req.body;
  const newovie = new Movie({
    name,
    image,
  });
  try {
    await newovie.save();
  } catch (err) {
    console.log(err);
  }
  res.status(200).json({ data: newovie });
};
export const changeMovie = async (req, res) => {
  const { name, image } = req.body;
  const changeMovie = new Movie({
    name,
    image,
  });
  var id = req.params.id;
  let movie;
  try {
    movie = await Movie.findByIdAndUpdate(id, { changeMovie });
  } catch (err) {
    console.log(err);
  }

  res.status(200).json({ data: movie });
};

export const deleteMovie = async (req, res) => {
  const id = req.params.id;
  let movie;
  try {
    movie = await Movie.findByIdAndDelete(id);
  } catch (err) {
    console.log(err);
  }
  res.status(200).json({ data: movie });
};
export const saveMovie = async (req, res) => {
  const id = req.params.id;
  let movie;
  try {
    // movie=awiat Movie.find({}).populate()
  } catch (err) {
    console.log(err);
  }
};

export const getallfilterMovies = async (req, res) => {
  try {
    const page = parseInt(req.query.page) - 1 || 0;
    const limit = parseInt(req.query.limit) || 5;
    const search = req.query.search || "";
    let sort = req.query.search || "rating";
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: "error" });
  }
};
