import { useContext } from "react";
import MultiFormContext from "config/multiFormContext";

const Steps: React.FC = () => {
  const { activeForm } = useContext(MultiFormContext);
  return <>{activeForm.formTitle}</>;
};

export default Steps;
