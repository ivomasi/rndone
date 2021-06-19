import React from "react";
import { Text } from "react-native";
import styled from "styled-components/native";

//global styles
import { radius, colors } from "../global/globalStyles";

const Card = ({ title, subTitle, image }) => {
  return (
    <CardContainer bgColor={colors.white} bRadius={radius.small_radius}>
      <CardImage source={image} />
      <InfoContainer>
        <Text>{title}</Text>
        <SubTitle textColor={colors.secondary}>${subTitle}</SubTitle>
      </InfoContainer>
    </CardContainer>
  );
};

export default Card;

const CardContainer = styled.View`
  width: 90%;
  border-radius: ${(props) => props.bRadius};
  background-color: ${(props) => props.bgColor};
  overflow: hidden;
  align-self: center;
  margin-bottom: 15px;
`;

const CardImage = styled.Image`
  width: 100%;
  height: 200px;
`;

const InfoContainer = styled.View`
  padding: 15px;
`;

const SubTitle = styled.Text`
  color: ${(props) => props.textColor};
`;
