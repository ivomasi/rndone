import React from "react";
import { StyleSheet, Text, View } from "react-native";

//comps
import Screen from "../components/Screen";
/* import ListItem from "../components/ListItem"; */

//icons
import { MaterialIcons } from "@expo/vector-icons";

//styled
import styled from "styled-components/native";

//global styles
import { colors } from "../global/globalStyles";

const MyAccountScreen = () => {
  return (
    <Screen>
      {/* <ListItem>
        <ProfileImage source={require("../assets/mosh.jpg")} />
        <View>
          <Text>Mosh Mohamedan</Text>
          <Text style={{ color: colors.gray }}>moshamohamedan@gmail.com</Text>
        </View>
      </ListItem>
      <View style={{ marginVertical: 15 }}>
        <ListItem bgColor={colors.white}>
          <MaterialIcons
            name="format-list-bulleted"
            size={25}
            color="white"
            style={[styles.list_icon, styles.icons]}
          />
          <LiText>my listings</LiText>
        </ListItem>
        <ListItem>
          <MaterialIcons
            name="email"
            size={25}
            color="white"
            style={[styles.email_icon, styles.icons]}
          />
          <LiText>my messages</LiText>
        </ListItem>
      </View>
      <ListItem>
        <MaterialIcons
          name="logout"
          size={25}
          color="white"
          style={[styles.icons, styles.logout_icon]}
        />
        <LiText>logout</LiText>
      </ListItem> */}
    </Screen>
  );
};

const ProfileImage = styled.Image`
  width: 70px;
  height: 70px;
  border-radius: 35px;
  margin-right: 10px;
`;

const ListItem = styled.View`
  flex-direction: row;
  align-items: center;
  width: 100%;
  padding: 15px;
  background-color: ${colors.white};
`;

const LiText = styled.Text`
  font-size: 18px;
  text-transform: capitalize;
`;

export default MyAccountScreen;

const styles = StyleSheet.create({
  icons: {
    borderRadius: 30,
    padding: 5,
    marginRight: 10,
    width: 45,
    height: 45,
    textAlign: "center",
    textAlignVertical: "center",
  },

  list_icon: {
    backgroundColor: colors.primary,
  },
  email_icon: {
    backgroundColor: colors.secondary,
  },

  logout_icon: {
    backgroundColor: "#ffe66d",
  },
});
