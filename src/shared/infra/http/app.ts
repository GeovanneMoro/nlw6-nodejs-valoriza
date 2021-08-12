import "reflect-metadata";
import express from "express";

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

export { app };
