import React from "react";

//formik
import { useFormikContext } from "formik";

//comps
import AppTextInput from "../AppTextInput";
import ErrorMessage from "./ErrorMessage";

const AppFormField = ({ name, ...otherProps }) => {
  const { handleChange, errors, setFieldTouched, touched } = useFormikContext();
  return (
    <>
      <AppTextInput
        {...otherProps}
        onBlur={() => setFieldTouched(name)}
        onChangeText={handleChange(name)}
      />

      <ErrorMessage error={errors[name]} visible={touched[name]} />
    </>
  );
};

export default AppFormField;
