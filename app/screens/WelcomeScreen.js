import React from "react";
import { StyleSheet, Text, View, ImageBackground, Image } from "react-native";

//styles
import { colors } from "../global/globalStyles";

//comps
import CustomButton from "../components/CustomButton";

const WelcomeScreen = () => {
  return (
    <ImageBackground
      blurRadius={3}
      style={styles.container}
      source={require("../assets/background.jpg")}
    >
      <View style={styles.logo_container}>
        <Image style={styles.logo} source={require("../assets/logo-red.png")} />
        <Text style={styles.tagline}>Sell What You Don´t Need</Text>
      </View>
      <View style={styles.input_container}>
        <CustomButton>Log In</CustomButton>
        <CustomButton color="secondary">Register</CustomButton>
        {/* <View style={[styles.log_in_input_container, styles.inputs]}>
          <Text>login</Text>
        </View>
        <View style={[styles.register_input_container, styles.inputs]}>
          <Text>register</Text>
        </View> */}
      </View>
    </ImageBackground>
  );
};

export default WelcomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "space-between",
  },

  logo_container: {
    top: 100,
    alignItems: "center",
  },

  logo: {
    width: 100,
    height: 100,
    marginBottom: 10,
  },

  input_container: {
    width: "100%",
  },

  log_in_input_container: {
    backgroundColor: colors.primary,
  },

  inputs: {
    height: 50,
  },

  tagline: {
    fontSize: 22,
    fontWeight: "bold",
  },

  register_input_container: {
    backgroundColor: colors.secondary,
  },
});
