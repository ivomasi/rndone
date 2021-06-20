import React from "react";
import { TouchableWithoutFeedback } from "react-native";

//styles
import { colors, icons_size } from "../global/globalStyles";

//styled
import styled from "styled-components/native";

//screen layout
import Screen from "../components/Screen";

//icons
import { AntDesign } from "@expo/vector-icons";

const PicturePreview = ({ navigation, route }) => {
  const { image } = route.params;

  const closeImage = () => {
    navigation.goBack();
  };

  return (
    <Screen bgColor={colors.black}>
      <IconContainer>
        <TouchableWithoutFeedback onPress={closeImage}>
          <AntDesign name="close" size={icons_size.medium} color="white" />
        </TouchableWithoutFeedback>
        <TouchableWithoutFeedback onPress={() => console.log("delete pressed")}>
          <AntDesign name="delete" size={icons_size.medium} color="white" />
        </TouchableWithoutFeedback>
      </IconContainer>
      <PreviewPicture source={image} resizeMode="contain" />
    </Screen>
  );
};

export default PicturePreview;

const IconContainer = styled.View`
  flex-direction: row;
  justify-content: space-between;
  padding: 0 30px;
`;

const PreviewPicture = styled.Image`
  width: 100%;
  height: 100%;
`;
