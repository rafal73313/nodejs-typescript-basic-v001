import { Router } from "express";

export const routerUser = Router();

routerUser.get("/users", (req, res) => {
  res.sendStatus(200);
});
