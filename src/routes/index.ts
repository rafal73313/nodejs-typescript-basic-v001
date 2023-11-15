import { Router } from "express";
import { routerUser } from "./users.routes.js";
import { routerMisc } from "./misc.routes.js";
import { routerBooks } from "./books.routes.js";

export const routerRoot = Router();
routerRoot.use(routerUser);
routerRoot.use(routerMisc);
routerRoot.use(routerBooks);
