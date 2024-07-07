import { Schema } from "mongoose";
import { TDiscount, TProduct, TSpecialOffer } from "./product.interface";

const discountSchema = new Schema<TDiscount>({
  isDiscount: { type: Boolean, required: true, default: false },
  discountAmount: { type: Number, default: 0 },
});

const specialOfferSchema = new Schema<TSpecialOffer>({
  isOffered: { type: Boolean, required: true, default: false },
  offerEvent: { type: String },
  offerDiscountAmount: { type: Number, required: true, default: 0 },
});
const specificationSchema: Schema = new Schema({
  category: { type: String, required: true },
  details: [
    {
      label: { type: String, required: true },
      value: { type: String, required: true },
    },
  ],
});
const ProductSchema: Schema = new Schema<TProduct>({
  name: { type: String, required: true },
  description: { type: String, required: true },
  price: { type: Number, required: true },
  brand: { type: String, required: true },
  category: { type: String, required: true },
  subcategory: { type: String, required: true },
  specifications: { type: [specificationSchema], required: true },
  stock: { type: Number, required: true, default: 0 },
  images: { type: [String], required: true },
  rating: { type: Number, required: true, default: 0 },
  reviews: [
    {
      user: { type: String, required: true },
      rating: { type: Number, required: true },
      comment: { type: String, required: true },
      date: { type: Date, required: true },
    },
  ],
  discount: { type: discountSchema, required: true },
  specialOffer: { type: specialOfferSchema, required: true },
});