import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { NavigationContainer } from "@react-navigation/native";

import ListingStack from "./ListingStack";

//screens
import MyAccountScreen from "../screens/MyAccountScreen";

const Drawer = createDrawerNavigator();

const DrawerStack = () => {
  return (
    <NavigationContainer>
      <Drawer.Navigator>
        <Drawer.Screen name="Home" component={ListingStack} />
        <Drawer.Screen name="My Profile" component={MyAccountScreen} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
};

export default DrawerStack;
