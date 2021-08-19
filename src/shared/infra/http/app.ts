import "reflect-metadata";
import express, { Request, Response, NextFunction } from "express";

import "express-async-errors";
import { AppError } from "../../errors/AppError";
import "../../container";
import createConnection from "../typeorm";
import { router } from "./routes";

createConnection();
const app = express();

app.use(express.json());

app.use("/", router);

app.get("/teste", (request, response) => {
  return response.send(JSON.stringify({ metodo: "GET" }));
});

app.post("/teste-post", (request, response) => {
  return response.send(JSON.stringify({ metodo: "POST" }));
});

app.use(
  (err: Error, request: Request, response: Response, next: NextFunction) => {
    if (err instanceof AppError) {
      return response.status(err.statusCode).json({ message: err.message });
    }
    return response.status(500).json({
      status: "error",
      message: `Internal server error - ${err.message}`,
    });
  }
);

export { app };
