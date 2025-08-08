import { Request, Response } from "express";
import { getAllUser, handleCreateUser } from "../services/user.service";

const getHomePage = async (req: Request, res: Response) => {
  const users = await getAllUser();
  // console.log("check users: ", users);

  return res.render("home.ejs", { users: users }); // Render the home page with the list of users
};

const getCreateUser = (req: Request, res: Response) => {
  return res.render("create.user.ejs");
};

const postCreateUser = (req: Request, res: Response) => {
  const { fullName, email, password, address } = req.body;
  console.log("check infor", fullName, email, password, address);
  const user = handleCreateUser(fullName, email, password, address);
  return res.redirect("/");
};

export { getHomePage, getCreateUser, postCreateUser };
