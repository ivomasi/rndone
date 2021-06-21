import React from "react";
import CustomButton from "../CustomButton";

import { useFormikContext } from "formik";

const SubmitButton = ({ text }) => {
  const { handleSubmit } = useFormikContext();

  return <CustomButton text={text} color="orange" onPress={handleSubmit} />;
};

export default SubmitButton;
