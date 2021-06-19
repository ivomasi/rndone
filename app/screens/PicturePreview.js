import React from "react";
import { StyleSheet, View } from "react-native";

//styles
import { colors, icons_size } from "../global/globalStyles";

//styled
import styled from "styled-components/native";

//icons
import { AntDesign } from "@expo/vector-icons";

const PicturePreview = () => {
  return (
    <Container bgColor={colors.black}>
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
      <PreviewPicture
        source={require("../assets/chair.jpg")}
        resizeMode="contain"
      />
    </Container>
  );
};

export default PicturePreview;

const Container = styled.View`
  flex: 1;
  background-color: ${(props) => props.bgColor};
`;

const PreviewPicture = styled.Image`
  width: 100%;
  height: 100%;
`;

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
});
