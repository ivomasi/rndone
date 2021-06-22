import React from "react";

import styled from "styled-components/native";

//screens
import WelcomeScreen from "./app/screens/WelcomeScreen";
import PicturePreview from "./app/screens/PicturePreview";
import MyAccountScreen from "./app/screens/MyAccountScreen";
import ListingsScreen from "./app/screens/ListingsScreen";
import ListingDetails from "./app/screens/ListingDetails";
import Messages from "./app/screens/Messages";
import LoginScreen from "./app/screens/LoginScreen";
import RegisterScreen from "./app/screens/RegisterScreen";
import ListingEdit from "./app/screens/ListingEdit";

//comps
import Card from "./app/components/Card";
import Screen from "./app/components/Screen";
import AppTextInput from "./app/components/AppTextInput";
import AppPicker from "./app/components/AppPicker";

//stacks
import ListingStack from "./app/routing/ListingStack";
import DrawerStack from "./app/routing/DrawerStack.js";

import Icon from "./app//components/Icon";

export default function App() {
  return <ListingEdit />;
}
