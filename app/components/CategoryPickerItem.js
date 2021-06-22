import React from "react";
import { Text } from "react-native";
import styled from "styled-components";

import Icon from "./Icon";

const CategoryPickerItem = ({ onPress, item }) => {
  return (
    <Item onPress={onPress}>
      <Icon
        name={item.icon}
        iconColor="white"
        backgroundColor={item.color}
        size={80}
      />
      <Text>{item.label}</Text>
    </Item>
  );
};

const Item = styled.TouchableOpacity`
  width: 33%;
  align-items: center;
  margin: 10px 0;
`;

export default CategoryPickerItem;
