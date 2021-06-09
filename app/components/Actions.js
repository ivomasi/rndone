import React from "react";
import { StyleSheet, View } from "react-native";

//icons
import { AntDesign } from "@expo/vector-icons";

//global style
import { icons_size } from "../global/globalStyles";

const Actions = () => {
  return (
    <View style={styles.container}>
      <AntDesign name="inbox" size={icons_size.medium} color="black" />
      <AntDesign name="delete" size={icons_size.medium} color="black" />
    </View>
  );
};

export default Actions;

const styles = StyleSheet.create({
  container: {
    width: 70,
    backgroundColor: "pink",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around",
  },
});
