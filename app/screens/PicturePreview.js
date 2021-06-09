import React from "react";
import { StyleSheet, View, Image } from "react-native";

//styles
import { colors, icons_size } from "../global/globalStyles";

//icons
import { AntDesign } from "@expo/vector-icons";

const PicturePreview = () => {
  return (
    <View style={styles.container}>
      <AntDesign
        name="close"
        size={icons_size.medium}
        color="white"
        style={[styles.close_icon, styles.icon]}
      />
      <AntDesign
        name="delete"
        size={icons_size.medium}
        color="white"
        style={[styles.delete_icon, styles.icon]}
      />
      <View style={[styles.delete_icon, styles.icon]}></View>
      <Image
        source={require("../assets/chair.jpg")}
        style={styles.preview_picture}
        resizeMode="contain"
      />
    </View>
  );
};

export default PicturePreview;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.black,
  },

  close_icon: {
    left: 40,
  },

  delete_icon: {
    right: 40,
  },
  icon: {
    position: "absolute",
    top: 40,
  },

  preview_picture: {
    width: "100%",
    height: "100%",
  },
});
