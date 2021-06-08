import React from "react";
import { StyleSheet, Text, View } from "react-native";

//st
import { colors } from "../global/globalStyles";

const Separator = () => {
  return <View style={styles.separator} />;
};

export default Separator;

const styles = StyleSheet.create({
  separator: {
    width: "100%",
    height: 1,
    backgroundColor: colors.light,
  },
});
