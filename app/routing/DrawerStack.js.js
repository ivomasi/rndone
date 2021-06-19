import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { NavigationContainer } from "@react-navigation/native";

import ListingStack from "./ListingStack";

const Drawer = createDrawerNavigator();

const DrawerStack = () => {
  return (
    <NavigationContainer>
      <Drawer.Navigator>
        <Drawer.Screen name="Home" component={ListingStack} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
};

export default DrawerStack;
