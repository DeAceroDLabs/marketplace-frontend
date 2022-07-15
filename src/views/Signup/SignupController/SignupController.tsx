import { useContext, useEffect } from "react";
import { FieldValues, UseFormReturn } from "react-hook-form";
import { getLocation } from "config/api";
import { DynamicDataContext } from "config/dynamicDataContext";
interface SignupControllerProps {
  formState: UseFormReturn<FieldValues, any>;
}

const SignupController: React.FC<SignupControllerProps> = ({ formState }) => {
  const zipCode = formState.watch("zipCode");
  const taxZipCode = formState.watch("taxZipCode");
  const { setDynamicData } = useContext(DynamicDataContext);

  useEffect(() => {
    if (zipCode && zipCode.length === 5) {
      const location = getLocation(zipCode);
      location.then((data) => {
        formState.setValue("state", data.location.state);
        formState.setValue("city", data.location.city);
        setDynamicData(data.location.neighborhood);
      });
    }
  }, [setDynamicData, zipCode, formState]);

  useEffect(() => {
    if (taxZipCode && taxZipCode.length === 5) {
      const location = getLocation(taxZipCode);
      location.then((data) => {
        formState.setValue("taxState", data.location.state);
      });
    }
  }, [taxZipCode, formState]);

  return null;
};

export default SignupController;