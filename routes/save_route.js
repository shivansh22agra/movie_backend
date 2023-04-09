import { getAllSaveMovie,postSaveMovie } from "../controllers/save_controller.js";


import express from "express";
const saveMovieRouter = express.Router();
saveMovieRouter.get("/saveMovie", getAllSaveMovie);
saveMovieRouter.post("/saveMovie",  postSaveMovie);
// movieRouter.put("/movie/:id",changeMovie);
// movieRouter.delete("/movie/:id",deleteMovie);

export default saveMovieRouter;