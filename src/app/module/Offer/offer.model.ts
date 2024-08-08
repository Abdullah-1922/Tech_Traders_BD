import { model,  Schema } from "mongoose";
import { TOffer } from "./offer.interface";

const OfferSchema = new Schema<TOffer>({
  offerStartDate: { type: String, required: true },
  offerEndDate: { type: String, required: true },
  offerTitle: { type: String, required: true },
  offerDescription: { type: String, required: true },
  extraMessage: { type: String },
  offerBannerImage: { type: String, required: true },
  isDeleted:{
    type:Boolean,
    required:true,
    default:false
  }
});

export const Offer = model<TOffer>("Offer", OfferSchema);
