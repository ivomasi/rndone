import React from "react";
import { StyleSheet, Text, View, Image } from "react-native";

//global styles
import { radius, colors } from "../global/globalStyles";

const Card = ({ title, subTitle, image }) => {
  return (
    <View style={styles.card_container}>
      <Image style={styles.card_image} source={image} />
      <View style={styles.text_container}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.subTitle}>{subTitle}</Text>
      </View>
    </View>
  );
};

export default Card;

const styles = StyleSheet.create({
  card_container: {
    width: "90%",
    borderRadius: radius.small_radius,
    backgroundColor: colors.white,
    overflow: "hidden",
  },

  card_image: {
    width: "100%",
    height: 200,
  },

  text_container: {
    padding: 15,
  },
  subTitle: {
    color: colors.secondary,
    fontWeight: "bold",

    marginTop: 7,
  },
});
