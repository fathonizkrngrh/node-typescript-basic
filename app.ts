import express from "express";

import todosRouter from "./routes/todos";

const app = express();

app.use(todosRouter);

app.listen({ port: 3000 });
