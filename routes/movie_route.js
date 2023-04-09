import { getAllmovies,postmovie,changeMovie,deleteMovie } from "../controllers/movie_controller.js";
import express from "express";
const movieRouter = express.Router();
movieRouter.get("/movie", getAllmovies);
movieRouter.post("/movie", postmovie);
movieRouter.put("/movie/:id",changeMovie);
movieRouter.delete("/movie/:id",deleteMovie);

export default movieRouter;