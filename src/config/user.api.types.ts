export const USER_API = {
  createUser: `user`,
};

export type User = {
  email: string;
  password: string;
};

export type CreateUser = {
  user: {
    name: string;
    lastName: string;
    rfc: string;
    curp: string;
    phone: string;
    fiscalDoc: string;
    email: string;
    additionalEmail: string;
    password: string;
  };
  location: {
    country: number;
    zipCode: number;
    state: number;
    city: number;
    neighborhood: number;
    street: string;
    externalNumber: number;
    lat: number;
    lon: number;
  };
};
