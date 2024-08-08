import { z } from "zod";

const userValidationSchema = z.object({
  body: z.object({
    name: z.object({
      firstName: z
        .string({
          invalid_type_error: "firstName must be a string",
          required_error: "firstName is required",
        })
        .trim()
        .max(12),
      middleName: z
        .string({ invalid_type_error: "middleName must be a string" })
        .trim()
        .max(12)
        .optional(),
      lastName: z
        .string({
          invalid_type_error: "lastName must be a string",
          required_error: "lastName is required",
        })
        .trim()
        .max(12),
    }),

    email: z
      .string({
        invalid_type_error: "Email must be a string",
        required_error: "Email is required",
      })
      .email(),
    password: z
      .string({
        invalid_type_error: "Password must be string",
      })
      .max(20, { message: "Password can not be more than 20 characters" })
      .optional(),
    profileImage: z.string({
      invalid_type_error: "profileImage must be a string",
      required_error: "profileImage is required",
    }),
  }),
});

export const UserValidation = {
  userValidationSchema,
};
