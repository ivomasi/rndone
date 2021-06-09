import React from "react";
import { StyleSheet, Text, View, Image } from "react-native";

//comps
import Screen from "../components/Screen";

//icons
import { MaterialIcons } from "@expo/vector-icons";

//global styles
import { colors } from "../global/globalStyles";

const MyAccountScreen = () => {
  return (
    <Screen moreStyles={styles.container}>
      <View style={styles.li}>
        <Image
          style={styles.profile_image}
          source={require("../assets/mosh.jpg")}
        />
        <View>
          <Text>Mosh Mohamedan</Text>
          <Text style={styles.email}>moshamohamedan@gmail.com</Text>
        </View>
      </View>
      <View style={styles.separate}>
        <View style={styles.li}>
          <MaterialIcons
            name="format-list-bulleted"
            size={25}
            color="white"
            style={[styles.list_icon, styles.icons]}
          />
          <Text style={styles.li_text}>My Listings</Text>
        </View>
        <View style={styles.li}>
          <MaterialIcons
            name="email"
            size={25}
            color="white"
            style={[styles.email_icon, styles.icons]}
          />
          <Text style={styles.li_text}>My Messages</Text>
        </View>
      </View>
      <View style={styles.li}>
        <MaterialIcons
          name="logout"
          size={25}
          color="white"
          style={[styles.icons, styles.logout_icon]}
        />
        <Text style={styles.li_text}>Logout</Text>
      </View>
    </Screen>
  );
};

export default MyAccountScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#e3bfbf",
  },

  profile_image: {
    width: 70,
    height: 70,
    borderRadius: 35,
    marginRight: 10,
  },

  email: {
    color: colors.gray,
  },

  separate: {
    marginVertical: 15,
  },

  li: {
    flexDirection: "row",
    alignItems: "center",
    width: "100%",
    padding: 15,
    backgroundColor: colors.white,
  },

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

  li_text: {
    fontSize: 18,
  },
});
