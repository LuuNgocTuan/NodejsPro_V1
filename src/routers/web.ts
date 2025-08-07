import express, { Express } from "express";
import { getHomePage } from "../controllers/user.controller";

const router = express.Router();
// const app = express();
const webRouters = (app: Express) => {

  router.get("/", getHomePage);

  app.use("/", router);
};

export default webRouters;
