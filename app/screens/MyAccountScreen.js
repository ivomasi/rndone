import React from "react";
import { View } from "react-native";

//comps
import Screen from "../components/Screen";
import ListItem from "../components/ListItem";
import Icon from "../components/Icon";

//global styles
import { colors } from "../global/globalStyles";

const MyAccountScreen = () => {
  return (
    <Screen>
      <ListItem
        title="Mosh mohamedan"
        subTitle="moshmohamedan@gmail.com"
        image={require("../assets/mosh.jpg")}
      />
      <View style={{ marginVertical: 15 }}>
        <ListItem
          title="my listings"
          IconComponent={
            <Icon
              name="format-list-bulleted"
              size={40}
              backgroundColor={colors.primary}
            />
          }
        />
        <ListItem
          title="my messages"
          IconComponent={
            <Icon name="email" size={40} backgroundColor={colors.secondary} />
          }
        />
      </View>

      <ListItem
        title="logout"
        IconComponent={
          <Icon name="logout" size={40} backgroundColor="#ffe66d" />
        }
      />
    </Screen>
  );
};
export default MyAccountScreen;
