import React from "react";
import styled from "styled-components/native";

//global styles
import { colors, radius } from "../global/globalStyles";

const CustomButton = ({ children, color = "primary" }) => {
  return (
    <Button bgColor={colors[color]}>
      <BtnText>{children}</BtnText>
    </Button>
  );
};

export default CustomButton;

const Button = styled.View`
  background-color: ${(props) => props.bgColor};
  width: 90%;
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
