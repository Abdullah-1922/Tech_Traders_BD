export type TDiscount = {
  isDiscount: boolean;
  discountAmount?: number;
};

export type TSpecialOffer = {
  isOffered: boolean;
  offerEvent: string;
  offerDiscountAmount: number;
};
export  type TSpecification= {
    category: string;
    details: {
      label: string;
      value: string;
    }[];
  }

export type TProduct = {
  name: string;
  description: string;
  price: number;
  brand: string;
  discount: TDiscount;
  specialOffer: TSpecialOffer;
  category: string;
  subcategory: string;
  specifications: TSpecification[]
  stock: number;
  images: string[];
  rating: number;
  reviews: {
    user: string;
    rating: number;
    comment: string;
    date: Date;
  }[];
};
