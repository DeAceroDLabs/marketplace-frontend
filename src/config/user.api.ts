import { postRequest } from "./api";
import { CreateUser, USER_API } from "./user.api.types";

const createUser = (user: CreateUser) => {
  return postRequest(USER_API.createUser, user);
};
export { createUser };
