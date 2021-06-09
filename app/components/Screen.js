import React from "react";
import { StyleSheet, StatusBar, Platform, SafeAreaView } from "react-native";

const Screen = ({ children, moreStyles }) => {
  return (
    <SafeAreaView style={[styles.screen, moreStyles]}>{children}</SafeAreaView>
  );
};

export default Screen;

const styles = StyleSheet.create({
  screen: {
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
  },
});
