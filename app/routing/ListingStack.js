import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

//screens
import ListingDetails from "../screens/ListingDetails";

const Stack = createStackNavigator();

const ListingStack = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Listing" component={Listing} />
        <Stack.Screen name="ListingDetails" component={ListingDetails} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
