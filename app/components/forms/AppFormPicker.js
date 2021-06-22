import React, { useState } from "react";

//comps
import AppPicker from "../AppPicker";
import ErrorMessage from "./ErrorMessage";

//form context
import { useFormikContext } from "formik";

const AppFormPicker = ({
  items,
  name,
  numberOfColumns,
  PickerItemComponent,
  placeholder,
}) => {
  const { setFieldValue, errors, touched, values } = useFormikContext();

  const onSelectItem = (item) => {
    setFieldValue(name, item);
  };

  return (
    <>
      <AppPicker
        items={items}
        onSelectItem={onSelectItem}
        placeholder={placeholder}
        selectedItem={values[name]?.label}
        numberOfColumns={numberOfColumns}
        PickerItemComponent={PickerItemComponent}
      ></AppPicker>
      <ErrorMessage error={errors[name]} visible={touched[name]}></ErrorMessage>
    </>
  );
};

export default AppFormPicker;
