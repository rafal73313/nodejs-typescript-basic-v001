import { Router } from "express";

/**
 * Defines the miscellaneous routes.
 * @summary These routes are used for miscellaneous purposes.
 * @description This file contains the definition of miscellaneous routes such as "/here".
 */

export const routerMisc = Router();

routerMisc.get("/here", (req, res) => {
  res.status(200).json({ message: "everything ok!!!" });
});
