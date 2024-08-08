import { Schema, model } from "mongoose";
import {
  TDiscount,
  TProduct,
  TQueryFeature,
  TSpecialOffer,
} from "./product.interface";

const discountSchema = new Schema<TDiscount>(
  {
    isDiscount: { type: Boolean, required: true },
    discountAmount: { type: Number },
  },
  { versionKey: false, _id: false }
);
const queryFeatureSchema = new Schema<TQueryFeature>(
  {
    price: { type: Number, required: true },
    primaryPurpose: {
      type: [
        {
          id: Number,
          title: String,
          description: String,
        },
      ],
      required: true,
    },
    displaySize: { type: Number, required: true },
    features: {
      type: [
        {
          id: Number,
          title: String,
          description: String,
        },
      ],
      required: true,
    },
    portability: {
      type: {
        isPortable: Boolean,
        description: String,
      },
    },
  },
  { versionKey: false, _id: false }
);

const specialOfferSchema = new Schema<TSpecialOffer>(
  {
    isOffered: { type: Boolean, required: true, default: false },
    offerInfo: { type: Schema.Types.ObjectId, ref: "Offer", required: true },
    offerDiscountAmount: { type: Number, required: true, default: 0 },
  },
  { versionKey: false, _id: false }
);
const specificationSchema: Schema = new Schema(
  {
    category: { type: String, required: true },
    details: [
      {
        label: { type: String, required: true },
        value: { type: String, required: true },
      },
    ],
  },
  { versionKey: false, _id: false }
);
const productSchema: Schema = new Schema<TProduct>({
  id: { type: String, required: true },
  name: { type: String, required: true }, //
  description: { type: String, required: true }, //
  regularPrice: { type: Number, required: true }, //
  price: { type: Number, required: true }, //
  brand: { type: String, required: true }, //
  category: { type: String, required: true }, //
  subcategory: { type: String, required: true }, //
  keyFeature: { type: [{ label: String, value: String }], required: true }, //
  queryFeature: { type: queryFeatureSchema }, //
  specifications: { type: [specificationSchema], required: true }, //
  stock: { type: Number, required: true, default: 0 }, //
  images: { type: [String], required: true }, //
  rating: { type: Number, required: true, default: 0 },
  status: {
    type: String,
    enum: ["OUT-OF-STOCK", "IN-STOCK"],
    default: "IN-STOCK",
  },
  reviews: [
    {
      user: { type: Schema.Types.ObjectId, ref: "User", required: true },
      rating: { type: Number, required: true },
      comment: { type: String, required: true },
      date: { type: Date, required: true },
    },
  ],
  discount: {
    type: discountSchema,
    required: true,
    default: { isDiscount: false, discountAmount: 0 },
  },
  specialOffer: {
    type: specialOfferSchema,
  },
  isDeleted: { type: Boolean, required: true, default: false },
});

export const Product = model<TProduct>("Product", productSchema);
