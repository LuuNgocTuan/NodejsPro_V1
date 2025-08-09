import express, { Express } from "express";
import {
    getCreateUser,
    getHomePage,
    postCreateUser,
} from "controllers/user.controller";

const router = express.Router();
const webRoutes = (app: Express) => {
    router.get("/", getHomePage);

    router.get("/create-user", getCreateUser);
    router.post("/handle-create-user", postCreateUser);

    app.use("/", router);
};

export default webRoutes;
