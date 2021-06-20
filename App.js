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
import AppTextInput from "./app/components/AppTextInput";

//stacks
import ListingStack from "./app/routing/ListingStack";
import DrawerStack from "./app/routing/DrawerStack.js";

export default function App() {
  return <MyAccountScreen />;
}

const Container = styled.View`
  padding: 100px 0;
`;
