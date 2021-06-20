import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

//screens
import ListingDetails from "../screens/ListingDetails";
import ListingsScreen from "../screens/ListingsScreen";
import PicturePreview from "../screens/PicturePreview";

//comps
import Header from "../components/Header";

const Stack = createStackNavigator();

const ListingStack = () => {
  return (
    <Stack.Navigator initialRouteName="ListingsScreen">
      <Stack.Screen
        options={({ navigation }) => {
          return {
            headerTitle: () => {
              return <Header title="Explore" navigation={navigation} />;
            },
          };
        }}
        name="ListingsScreen"
        component={ListingsScreen}
      />
      <Stack.Screen
        options={({ route }) => ({ title: route.params.title })}
        name="ListingDetails"
        component={ListingDetails}
      />

      <Stack.Screen
        options={{ headerShown: false }}
        name="PicturePreview"
        component={PicturePreview}
      />
    </Stack.Navigator>
  );
};

export default ListingStack;
