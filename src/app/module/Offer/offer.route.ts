import express from "express";
import { OfferControllers } from "./offerController";
import validateRequest from "../../middlewares/validateRequest";
import { offerValidation } from "./offer.validation";
const route = express.Router();

route.post("/create-offer", validateRequest(offerValidation.createOfferValidation),OfferControllers.createOffer);

export const OfferRoutes = route;
