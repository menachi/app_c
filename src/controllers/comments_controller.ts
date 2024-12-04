import commentsModel, { IComments } from "../models/comments_model";
import { Request, Response } from "express";
import BaseController from "./base_controller";

const commentsController = new BaseController<IComments>(commentsModel);


export default commentsController
