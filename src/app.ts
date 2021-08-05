import express from "express";

const app = express();

app.get("/teste", (request, response) => {
  return response.send(JSON.stringify({ metodo: "GET" }));
});

app.post("/teste-post", (request, response) => {
  return response.send(JSON.stringify({ metodo: "POST" }));
});

export { app };
