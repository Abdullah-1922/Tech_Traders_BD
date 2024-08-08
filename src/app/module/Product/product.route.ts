import express from "express";
// import validateRequest from '../../middlewares/validateRequest';
import { ProductControllers } from "./product.controller";

const router = express.Router();

router.post("/create-product", ProductControllers.createProduct);

export const ProductRoutes = router;
