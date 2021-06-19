import React, { useState, useEffect } from "react";
import { View, TouchableHighlight } from "react-native";

//sytled
import styled from "styled-components/native";

//gesture
import Swipeable from "react-native-gesture-handler/Swipeable";

//styles
import { colors } from "../global/globalStyles";

const ListItem = ({ image, title, subTitle, onPress, renderRightActions }) => {
  const [strippedMessage, setStrippedMessage] = useState("");

  useEffect(() => {
    if (subTitle.length > 40) {
      const sliced = subTitle.slice(0, 41);

      setStrippedMessage(sliced + " ...");
    }
  }, []);

  return (
    <Swipeable renderRightActions={renderRightActions}>
      <TouchableHighlight underlayColor={colors.light} onPress={onPress}>
        <ListItemContainer>
          <ListItemImage source={image} />
          <View>
            <ListItemTitle>{title}</ListItemTitle>
            <ListItemSubTitle color={colors.gray}>
              {strippedMessage}
            </ListItemSubTitle>
          </View>
        </ListItemContainer>
      </TouchableHighlight>
    </Swipeable>
  );
};

export default ListItem;

const ListItemContainer = styled.View`
  flex-direction: row;
  align-items: flex-start;
  padding: 15px;
`;

const ListItemImage = styled.Image`
  width: 60px;
  height: 60px;
  border-radius: 50px;
  margin-right: 10px;
`;

const ListItemTitle = styled.Text`
  margin-bottom: 5px;
`;
const ListItemSubTitle = styled.Text`
  color: ${(props) => props.color};
`;
