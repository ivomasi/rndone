import React from "react";
import { View } from "react-native";

//styled
import styled from "styled-components/native";

//comps
import CustomButton from "../components/CustomButton";

const WelcomeScreen = () => {
  return (
    <Container blurRadius={3} source={require("../assets/background.jpg")}>
      <LogoContainer>
        <Logo source={require("../assets/logo-red.png")} />
        <Tagline>Sell What You Don´t Need</Tagline>
      </LogoContainer>
      <View style={{ width: "100%" }}>
        <CustomButton>Log In</CustomButton>
        <CustomButton color="secondary">Register</CustomButton>
      </View>
    </Container>
  );
};

const Container = styled.ImageBackground`
  flex: 1;
  align-items: center;
  justify-content: space-between;
`;

const LogoContainer = styled.View`
  top: 100px;
  align-items: center;
`;

const Logo = styled.Image`
  width: 100px;
  height: 100px;
  margin-bottom: 10px;
`;

const Tagline = styled.Text`
  font-size: 22px;
  font-weight: bold;
`;

export default WelcomeScreen;
