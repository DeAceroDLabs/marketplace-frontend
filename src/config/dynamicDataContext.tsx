import React from "react";

const defaultForm = {
  dynamicData: {} as any,
  setDynamicData: (data: any) => {},
};

export const DynamicDataContext = React.createContext(defaultForm);

export const DynamicDataProvider = DynamicDataContext.Provider;

export default DynamicDataContext;
