import React, { useEffect, useState } from "react";
import { TouchableWithoutFeedback, View } from "react-native";

//styled
import styled from "styled-components/native";

//comps
import ListItem from "../components/ListItem";

//global styles
import { colors } from "../global/globalStyles";

//dummy
import { dummy } from "./ListingsScreen";

const ListingDetails = ({ route, navigation }) => {
  const [item, setItem] = useState({});

  useEffect(() => {
    const { itemID } = route.params;

    const item = dummy.find((i) => i.id === itemID);

    console.log(item);
    setItem(item);
  }, []);

  const openPicturePreview = () => {
    navigation.navigate("PicturePreview", { image: item.image });
  };

  return (
    <View style={{ flex: 1 }}>
      <TouchableWithoutFeedback onPress={openPicturePreview}>
        <ListingImage source={item.image} />
      </TouchableWithoutFeedback>
      <Description>
        <Title>{item.title}</Title>
        <SubTitle>${item.subTitle}</SubTitle>
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
  color: ${colors.secondary};
  font-size: 20px;
`;

const Description = styled.View`
  background-color: ${colors.white};
  padding: 20px;
`;
