import React from "react";
import { StyleSheet, View } from "react-native";

//icons
import { AntDesign } from "@expo/vector-icons";

//global styles
import { colors } from "../global/globalStyles";

const Actions = ({ handleDelete, handleArchive }) => {
  return (
    <View style={styles.container}>
      <AntDesign name="inbox" size={30} color="black" onPress={handleArchive} />
      <AntDesign name="delete" size={30} color="black" onPress={handleDelete} />
    </View>
  );
};

export default Actions;

const styles = StyleSheet.create({
  container: {
    width: 120,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around",
  },
});
