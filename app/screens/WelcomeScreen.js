import React from "react";

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
      <ButtonContainer>
        <CustomButton text="Log In"></CustomButton>
        <CustomButton text="Register" color="secondary"></CustomButton>
      </ButtonContainer>
    </Container>
  );
};

const Container = styled.ImageBackground`
  flex: 1;
  align-items: center;
  padding: 15px;
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

const ButtonContainer = styled.View`
  width: 100%;
`;

export default WelcomeScreen;
