import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, View, Text } from "react-native";

//screens
import WelcomeScreen from "./app/screens/WelcomeScreen";
import PicturePreview from "./app/screens/PicturePreview";
import MyAccountScreen from "./app/screens/MyAccountScreen";
import ListingsScreen from "./app/screens/ListingsScreen";
import ListingDetails from "./app/screens/ListingDetails";
import Messages from "./app/screens/Messages";

import Card from "./app/components/Card";

export default function App() {
  return <WelcomeScreen />;
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "black",
  },
});
