import { Request, Response } from "express";
import { handleCreateUser } from "../services/user.service";

const getHomePage = (req: Request, res: Response) => {
    return res.render("home.ejs");
};
const getCreateUser = (req: Request, res: Response) => {
    return res.render("create.user.ejs");
};

const postCreateUser = async (req: Request, res: Response) => {
    const { fullName, email, password, address } = req.body;
    console.log("check infor", fullName, email, password, address);
    const user = await handleCreateUser(fullName, email, password, address);
    return res.redirect("/");
};

export { getHomePage, getCreateUser, postCreateUser };
