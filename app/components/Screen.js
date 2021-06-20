import React from "react";
import { StatusBar, Platform } from "react-native";

import styled from "styled-components/native";

//colors
import { colors } from "../global/globalStyles";

const Screen = ({ children, bgColor }) => {
  return (
    <ScreenContainer
      statusBarPadding={
        Platform.OS === "android" ? StatusBar.currentHeight + 10 : 10
      }
      bgColor={bgColor}
    >
      {children}
    </ScreenContainer>
  );
};

export default Screen;

const ScreenContainer = styled.SafeAreaView`
  padding-top: ${(props) => props.statusBarPadding}px;
  flex: 1;
  background-color: ${(props) =>
    props.bgColor ? props.bgColor : colors.white};
`;
