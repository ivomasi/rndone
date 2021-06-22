import React from "react";
import { Keyboard } from "react-native";

//comps
import Screen from "../components/Screen";
import {
  AppForm,
  AppFormField,
  AppFormPicker,
  SubmitButton,
} from "../components/forms";

import CategoryPickerItem from "../components/CategoryPickerItem";

//validation
import * as yup from "yup";

const validationSchema = yup.object().shape({
  title: yup.string().required().min(1).max(30).label("Title"),
  price: yup.number().required().min(1).max(10000).label("Price"),
  category: yup.object().required().nullable().label("Category"),
  description: yup.string().max(150).label("Description"),
});

//dummy
const categories = [
  {
    id: 1,
    label: "Furniture",
    color: "#fc5c65",
    icon: "floor-lamp",
  },
  {
    id: 2,
    label: "Cars",
    color: "#fd9644",
    icon: "car",
  },
  {
    id: 3,
    label: "Cameras",
    color: "#fed330",
    icon: "camera",
  },
  {
    id: 4,
    label: "Games",
    color: "#26de81",
    icon: "cards",
  },
  {
    id: 5,
    label: "Clothing",
    color: "#2bcbba",
    icon: "shoe-heel",
  },
  {
    id: 6,
    label: "Sports",
    color: "#45aaf2",
    icon: "basketball",
  },
  {
    id: 7,
    label: "Movies & Music",
    color: "#4b7bec",
    icon: "headphones",
  },
];

const ListingEdit = () => {
  return (
    <Screen>
      <AppForm
        initialValues={{ title: "", price: 0, category: null, description: "" }}
        onSubmit={(values) => {
          Keyboard.dismiss();
          console.log(values);
        }}
        validationSchema={validationSchema}
      >
        <AppFormField name="title" placeholder="Title" maxLength={8} />

        <AppFormField
          name="price"
          maxLength={8}
          keyboardType="numeric"
          placeholder="Price"
        />

        <AppFormPicker
          name="category"
          items={categories}
          placeholder="categories"
          numberOfColumns={3}
          PickerItemComponent={CategoryPickerItem}
        />

        <AppFormField
          name="description"
          placeholder="Description"
          multiline
          numberOfLines={3}
        />

        <SubmitButton text="POST" />
      </AppForm>
    </Screen>
  );
};

export default ListingEdit;
