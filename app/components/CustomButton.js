import React from "react";
import styled from "styled-components/native";

//global styles
import { colors, radius } from "../global/globalStyles";

const CustomButton = ({ children, color = "primary" }) => {
  return (
    <Button bgColor={colors[color]} bRadius={radius.medium_radius}>
      <BtnText color={colors.white}>{children}</BtnText>
    </Button>
  );
};

export default CustomButton;

const Button = styled.View`
  background-color: ${(props) => props.bgColor};
  width: 90%;
  height: 50px;
  border-radius: ${(props) => props.bRadius}px;
  align-self: center;
  align-items: center;
  justify-content: center;
  margin-bottom: 10px;
`;

const BtnText = styled.Text`
  font-weight: 700;
  font-size: 18px;
  color: ${(props) => props.color};
`;
