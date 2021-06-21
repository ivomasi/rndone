import React from "react";
import styled from "styled-components/native";

//global styles
import { colors, radius } from "../global/globalStyles";

const CustomButton = ({ text, color = "primary", onPress }) => {
  return (
    <Button bgColor={colors[color]} onPress={onPress}>
      <BtnText>{text}</BtnText>
    </Button>
  );
};

export default CustomButton;

const Button = styled.TouchableOpacity`
  background-color: ${(props) => props.bgColor};
  width: 100%;
  height: 50px;
  border-radius: ${radius.medium_radius}px;
  align-self: center;
  align-items: center;
  justify-content: center;
  margin-bottom: 10px;
`;

const BtnText = styled.Text`
  font-weight: 700;
  font-size: 18px;
  color: ${colors.white};
`;
