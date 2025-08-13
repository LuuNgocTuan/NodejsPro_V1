import { Request, Response } from "express";
import {
  getAllUser,
  getUserById,
  handleCreateUser,
  handleDeleteUser,
  updateUserById,
} from "services/user.service";

const getHomePage = async (req: Request, res: Response) => {
  const users = await getAllUser();
  // console.log("check users: ", users);

  return res.render("home.ejs", { users: users }); // Render the home page with the list of users
};

const getCreateUser = (req: Request, res: Response) => {
  return res.render("create.user.ejs");
};

const postCreateUser = async (req: Request, res: Response) => {
  const { fullName, email, password, address } = req.body;
  await handleCreateUser(fullName, email, password, address);
  return res.redirect("/");
};

const postDeleteUser = async (req: Request, res: Response) => {
  const { id } = req.params;
  await handleDeleteUser(id);
  return res.redirect("/");
};

const getAUser = async (req: Request, res: Response) => {
  const { id } = req.params;
  const user = await getUserById(id);
  return res.render("view.user.ejs", { id, user });
};

const postUpdateUser = async (req: Request, res: Response) => {
  const { id, fullName, email, password, address } = req.body;
  
  await updateUserById(id, fullName, email, password, address);
  return res.redirect("/");
};

export {
  getHomePage,
  getCreateUser,
  postCreateUser,
  postDeleteUser,
  getAUser,
  postUpdateUser,
};
