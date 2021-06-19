import React, { useState, useEffect } from "react";
import { FlatList } from "react-native";

//comps
import Screen from "../components/Screen";
import Card from "../components/Card";

const dummy = [
  {
    id: 1,
    image: require("../assets/jacket.jpg"),
    title: "ac",
    subTitle: 74,
  },
  {
    id: 2,
    image: require("../assets/chair.jpg"),
    title: "non",
    subTitle: 26,
  },
  {
    id: 3,
    image: require("../assets/jacket.jpg"),
    title: "eget",
    subTitle: 5,
  },
  {
    id: 4,
    image: require("../assets/background.jpg"),
    title: "lectus",
    subTitle: 69,
  },
  {
    id: 5,
    image: require("../assets/jacket.jpg"),
    title: "vel",
    subTitle: 3,
  },
];

const ListingsScreen = () => {
  const [listings, setListings] = useState(dummy);

  useEffect(() => {
    //fetch data
  }, []);
  return (
    <Screen>
      <FlatList
        data={listings}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => {
          return (
            <Card
              title={item.title}
              subTitle={item.subTitle}
              image={item.image}
            />
          );
        }}
      />
    </Screen>
  );
};

export default ListingsScreen;
