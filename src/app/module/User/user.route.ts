/* eslint-disable @typescript-eslint/no-explicit-any */
import express, { NextFunction, Request, Response } from "express";
import validateRequest from "../../middlewares/validateRequest";
// import { upload } from '../../utils/sendImageToCloudinary';
import { UserControllers } from "./user.controller";
import { UserValidation } from "./user.validation";

// Todo. Everything in this file need to customize according to your requirement

const router = express.Router();

router.post(
  "/create-user",
  // upload.single('file'),
  validateRequest(UserValidation.userValidationSchema),
  UserControllers.createUser,
);
export const UserRoutes = router;
