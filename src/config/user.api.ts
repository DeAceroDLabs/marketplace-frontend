import { postRequest } from "./api";
import { User, USER_API } from "./user.api.types";

const createAuth0User = (user: User) => {
  const body = {
    client_id: process.env.REACT_APP_AUTH0_CLIENT_ID,
    email: user.email,
    password: user.password,
    connection: process.env.REACT_APP_AUTH0_CONNECTION,
  };
  return postRequest(USER_API.createAuth0User, body);
};
export { createAuth0User };
