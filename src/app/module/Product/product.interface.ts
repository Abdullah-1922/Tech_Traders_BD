import { TPortable, TPurpose, TValidFeatures } from "./product.constant";

export type TDiscount = {
  isDiscount: boolean;
  discountAmount?: number;
};

export type TSpecialOffer = {
  isOffered: boolean;
  
  offerInfo?: string ;
  offerDiscountAmount: number;
};
export type TSpecification = {
  category: string;
  details: {
    label: string;
    value: string;
  }[];
};
export type TKeyFeature = {
  label: string;
  value: string;
}[];
export type TQueryFeature = {
  price: number;
  primaryPurpose: TPurpose[];
  displaySize: number;
  portability: TPortable;
  features: TValidFeatures[];
};

export type TProduct = {
  id: string;
  name: string;
  description: string;
  regularPrice: number;
  price: number;
  brand: string;
  discount: TDiscount;
  specialOffer: TSpecialOffer;
  category: string;
  subcategory: string;
  keyFeature: TKeyFeature;
  queryFeature?: TKeyFeature;
  specifications: TSpecification[];
  stock: number;
  images: string[];
  rating: number;
  status: "IN-STOCK" | "OUT-OF-STOCK";
  reviews: {
    user: string;
    rating: number;
    comment: string;
    date: Date;
  }[];
  isDeleted: boolean;
};
