import React from "react";
import { StatusBar, Platform } from "react-native";

import styled from "styled-components/native";

const Screen = ({ children, moreStyles }) => {
  return (
    <ScreenContainer
      statusBarPadding={Platform.OS === "android" ? StatusBar.currentHeight : 0}
    >
      {children}
    </ScreenContainer>
  );
};

export default Screen;

const ScreenContainer = styled.SafeAreaView`
  padding-top: ${(props) => props.statusBarPadding}px;
`;
