import "reflect-metadata";
import express from "express";
import dotenv from "dotenv";
import pollRouter from "./app/routes/poll.routes";
dotenv.config();

const app = express();

const port = process.env.PORT || 3000;

app.use(express.json());
app.use("/api/v1", pollRouter);

app.listen(port, () => {
  console.log("SERVER ON", port);
});
