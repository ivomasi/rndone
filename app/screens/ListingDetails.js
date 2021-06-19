import React, { useEffect, useState } from "react";
import { View } from "react-native";

//styled
import styled from "styled-components/native";

//comps
import ListItem from "../components/ListItem";

//global styles
import { colors } from "../global/globalStyles";

//dummy
import { dummy } from "./ListingsScreen";

const ListingDetails = ({ route }) => {
  const [item, setItem] = useState({});

  useEffect(() => {
    const { itemID } = route.params;

    const item = dummy.find((i) => i.id === itemID);

    console.log(item);
    setItem(item);
  }, []);

  return (
    <View style={{ flex: 1 }}>
      <ListingImage source={item.image} />
      <Description bgColor={colors.white}>
        <Title>{item.title}</Title>
        <SubTitle color={colors.secondary}>${item.subTitle}</SubTitle>
      </Description>
      <ListItem
        image={require("../assets/mosh.jpg")}
        title={"Mosh someone"}
        subTitle={"5 Listing"}
        renderRightActions={null}
        onPress={() => console.log("la")}
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
