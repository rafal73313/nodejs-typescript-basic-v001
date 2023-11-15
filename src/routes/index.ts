import { Router } from "express";
import { routerUser } from "./users.routes.js";
import { routerMisc } from "./misc.routes.js";

export const routerRoot = Router();
routerRoot.use(routerUser);
routerRoot.use(routerMisc);
