export const USER_API = {
  createAuth0User: `${process.env.REACT_APP_AUTH0_APP_URL}/dbconnections/signup`,
};

export type User = {
  email: string;
  password: string;
};
