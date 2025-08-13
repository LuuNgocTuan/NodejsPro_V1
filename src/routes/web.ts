import express, { Express } from "express";
import {
  getAUser,
  getCreateUser,
  getHomePage,
  postCreateUser,
  postDeleteUser,
  postUpdateUser,
} from "controllers/user.controller";

const router = express.Router();
const webRoutes = (app: Express) => {
  router.get("/", getHomePage);

  router.get("/create-user", getCreateUser);
  router.post("/handle-create-user", postCreateUser);
  router.post("/delete-user/:id", postDeleteUser);
  router.get("/view-user/:id", getAUser);
  router.post("/update-user", postUpdateUser);

  app.use("/", router);
};

export default webRoutes;
