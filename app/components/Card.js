import React from "react";
import { Text } from "react-native";
import styled from "styled-components/native";

//global styles
import { radius, colors } from "../global/globalStyles";

const Card = ({ title, subTitle, image }) => {
  return (
    <CardContainer>
      <CardImage source={image} />
      <InfoContainer>
        <Text>{title}</Text>
        <SubTitle>${subTitle}</SubTitle>
      </InfoContainer>
    </CardContainer>
  );
};

export default Card;

const CardContainer = styled.View`
  width: 90%;
  border-radius: ${radius.small_radius};
  background-color: ${colors.white};
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
  color: ${colors.secondary};
`;
