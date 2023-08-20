import express from "express";
import mongoose from "mongoose";
import movieRouter from "./routes/movie_route.js";
import saveMovieRouter from "./routes/save_route.js";
const app = express();
app.use(express.json());
app.use("/", movieRouter);
app.use("/", saveMovieRouter);
mongoose
  .connect(
"mongodb+srv://agrawalshivansh22:NJE8M6xBP3RWb2sA@cluster0.r0ftezj.mongodb.net/?retryWrites=true&w=majority"  )
  .then(() => {
    app.listen(3000, () => {
      console.log("Server is running");
    });
  });
