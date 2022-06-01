import React from "react";

const defaultUser = {
  username: "",
  setUser: (username: string) => {},
};

const UserContext = React.createContext(defaultUser);

export const UserProvider = UserContext.Provider;

export default UserContext;
