import React from "react";

import styled from "styled-components/native";

//screens
import WelcomeScreen from "./app/screens/WelcomeScreen";
import PicturePreview from "./app/screens/PicturePreview";
import MyAccountScreen from "./app/screens/MyAccountScreen";
import ListingsScreen from "./app/screens/ListingsScreen";
import ListingDetails from "./app/screens/ListingDetails";
import Messages from "./app/screens/Messages";
//comps
import Card from "./app/components/Card";
import Screen from "./app/components/Screen";
import AppTextInput from "./app/components/AppTextInput";
import AppPicker from "./app/components/AppPicker";

//stacks
import ListingStack from "./app/routing/ListingStack";
import DrawerStack from "./app/routing/DrawerStack.js";

import Icon from "./app//components/Icon";

//dummy
const categories = [
  {
    id: 1,
    category: "Games",
  },
  {
    id: 2,
    category: "Electronics",
  },
  {
    id: 3,
    category: "Outdoors",
  },
  {
    id: 4,
    category: "Clothing",
  },
];

export default function App() {
  return (
    <Screen>
      <AppPicker icon="keyboard-arrow-down" items={categories} />
      <AppTextInput icon="email" />
    </Screen>
  );
}
