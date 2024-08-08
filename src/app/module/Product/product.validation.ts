import { z } from "zod";

const createProductValidation = z.object({
  body: z.object({
    name: z.string({ required_error: "Product name is required" }),
    description: z.string({ required_error: "Description name is required" }),
    regularPrice: z
      .number({ required_error: "RegularPrice name is required" })
      .min(0),
    price: z.number({ required_error: "Price name is required" }).min(0),
    brand: z.string({ required_error: "Brand name is required" }),
    category: z.string({ required_error: "Category name is required" }),
    subcategory: z.string({ required_error: "Subcategory name is required" }),
    keyFeature: z.array(z.object({ label: z.string(), value: z.string() })),
    queryFeature: z.object({
      primaryPurpose: z
        .array(
          z.object({
            id: z.number().optional(),
            title: z.string(),
            description: z.string(),
          })
        )
        .optional(),
    }),

    specifications: z.array(
      z
        .object({
          category: z.string(),
          details: z.array(
            z.object({
              label: z.string(),
              value: z.string(),
            })
          ),
        })
        .optional()
    ),
    stock: z.number().min(0).optional(),
    images: z.array(z.string()),
    rating: z.number().max(5).optional(),
    status: z.enum(["IN-STOCK", "OUT-OF-STOCK"]),
    reviews: z
    .array(
      z.object({
        id: z.number().optional(),
        title: z.string(),
        description: z.string(),
      })
    )
    .optional(),
  }),
});
