import postModel from "../models/posts_model";
import { Request, Response } from "express";
import baseController from "./base_controller";

const postsController = new baseController(postModel);

export default postsController;
