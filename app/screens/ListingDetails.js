import React from "react";
import { View } from "react-native";

//styled
import styled from "styled-components/native";

//comps
import ListItem from "../components/ListItem";

//global styles
import { colors } from "../global/globalStyles";

const ListingDetails = () => {
  return (
    <View style={{ flex: 1 }}>
      <ListingImage source={require("../assets/jacket.jpg")} />
      <Description bgColor={colors.white}>
        <Title>sadf</Title>
        <SubTitle color={colors.secondary}>asdfas</SubTitle>
      </Description>
      <ListItem
        image={require("../assets/mosh.jpg")}
        title={"Mosh Apemadami"}
        subTitle={"5 Listings"}
      />
    </View>
  );
};

export default ListingDetails;

const ListingImage = styled.Image`
  width: 100%;
  height: 300px;
`;

const Title = styled.Text`
  font-size: 24px;
  margin-bottom: 10px;
`;
const SubTitle = styled.Text`
  font-weight: bold;
  color: ${(props) => props.color};
  font-size: 20px;
`;

const Description = styled.View`
  background-color: ${(props) => props.bgColor};
  padding: 20px;
`;
