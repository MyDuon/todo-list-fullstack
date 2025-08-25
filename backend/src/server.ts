import express from "express";
import todoRoutes from "./routes/todoRoutes.ts";

const app = express();
const port = 3000;

app.use("/api/todo", todoRoutes);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
