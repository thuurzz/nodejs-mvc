import express from "express";
import { userRouter } from "./routers/user.route.js";

const app = express();

app.use(express.json());

app.listen(3333, () => {
  console.log("Server started on port 3333!");
  console.log("Server link: http://localhost:3333");
});

app.get("/", (req, res) => {
  return res.json({ message: "Health" });
});

app.use("/users", userRouter);

export { app };
