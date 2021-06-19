import React from "react";

//styled
import styled from "styled-components/native";

//icon
import { MaterialIcons } from "@expo/vector-icons";

const Header = ({ title, navigation }) => {
  const openDrawer = () => {
    navigation.openDrawer();
  };
  return (
    <HeaderContainer>
      <HeaderIcon onPress={openDrawer}>
        <MaterialIcons name="menu" size={24} color="black" on />
      </HeaderIcon>

      <HeaderText>{title}</HeaderText>
    </HeaderContainer>
  );
};

const HeaderContainer = styled.View`
  flex-direction: row;
  align-items: center;
  position: relative;
  justify-content: center;
`;

const HeaderText = styled.Text`
  font-size: 24px;
  font-weight: bold;
`;

const HeaderIcon = styled.TouchableOpacity`
  position: absolute;
  left: 0;
`;

export default Header;
