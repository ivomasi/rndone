import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, View, Text } from "react-native";

//screens
import WelcomeScreen from "./app/screens/WelcomeScreen";
import PicturePreview from "./app/screens/PicturePreview";

import Card from "./app/components/Card";
import ListingDetails from "./app/screens/ListingDetails";

import Messages from "./app/screens/Messages";

export default function App() {
  return <Messages />;
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "black",
  },
});
