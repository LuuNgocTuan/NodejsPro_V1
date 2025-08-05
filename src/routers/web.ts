import express, { Express } from "express";

const router = express.Router();
// const app = express();
const webRouters = (app: Express) => {

  router.get("/", (req, res) => {
    res.render("home.ejs");
  });

  app.use("/", router);
};

export default webRouters;
