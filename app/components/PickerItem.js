import React from "react";
import { Text } from "react-native";
import styled from "styled-components";

import Icon from "./Icon";

const PickerItem = ({ onPress, item }) => {
  return (
    <Item onPress={onPress}>
      <Text>{item.label}</Text>
    </Item>
  );
};

const Item = styled.TouchableOpacity`
  padding: 15px;
`;

export default PickerItem;
