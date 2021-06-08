import React from "react";
import { StyleSheet, Text, View } from "react-native";

//global styles
import { colors, radius } from "../global/globalStyles";

const CustomButton = ({ children, color = "primary" }) => {
  return (
    <View style={[styles.button_container, { backgroundColor: colors[color] }]}>
      <Text style={styles.button_text}>{children}</Text>
    </View>
  );
};

export default CustomButton;

const styles = StyleSheet.create({
  button_container: {
    width: "90%",
    height: 50,
    borderRadius: radius.medium_radius,
    alignSelf: "center",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 10,
  },
  button_text: {
    fontWeight: "700",
    fontSize: 18,
    color: colors.white,
  },
});
