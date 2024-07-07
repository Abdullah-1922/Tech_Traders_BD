/* eslint-disable no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { TUser } from "./user.interface";
import { User } from "./user.model";

const createUser = async (payload: Partial<TUser>) => {
  const id = Math.random().toString(36).substring(2, 10);

  payload.id = id;
  payload.role = "admin";

  const result = await User.create(payload);
  return result;
};

export const UserServices = {
  createUser,
};
