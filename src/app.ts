import express from "express";
import morgan from "morgan";
import { routerRoot } from "./routes/index.js";
import { logger } from "./utils/logger.js";

const app = express();
app.use(morgan("dev"));

const port = 4001;

app.use("/api", routerRoot);

app.listen(port, () => {
  logger.info(`Listening on port: ${port}`);
});
