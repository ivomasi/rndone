import React, { useState, useEffect } from "react";
import { TouchableHighlight } from "react-native";

//sytled
import styled from "styled-components/native";

//gesture
import Swipeable from "react-native-gesture-handler/Swipeable";

//styles
import { colors } from "../global/globalStyles";

const ListItem = ({
  image,
  IconComponent,
  title,
  subTitle,
  onPress,
  renderRightActions,
}) => {
  const [message, setMessage] = useState("");

  useEffect(() => {
    if (subTitle && subTitle.length > 40) {
      const sliced = subTitle.slice(0, 41);

      setMessage(sliced + " ...");
    } else {
      setMessage(subTitle);
    }
  }, []);

  return (
    <Swipeable renderRightActions={renderRightActions}>
      <TouchableHighlight underlayColor={colors.light} onPress={onPress}>
        <ListItemContainer>
          {IconComponent}
          {image && <ListItemImage source={image} />}

          <ListItemText>
            {title && <ListItemTitle>{title}</ListItemTitle>}
            {subTitle && <ListItemSubTitle>{message}</ListItemSubTitle>}
          </ListItemText>
        </ListItemContainer>
      </TouchableHighlight>
    </Swipeable>
  );
};

export default ListItem;

const ListItemContainer = styled.View`
  flex-direction: row;
  align-items: center;
  padding: 15px;
  background-color: ${colors.white};
`;

const ListItemImage = styled.Image`
  width: 80px;
  height: 80px;
  border-radius: 50px;
  margin-right: 10px;
`;

const ListItemText = styled.View`
  margin-left: 20px;
`;

const ListItemTitle = styled.Text`
  margin-bottom: 5px;

  font-size: 20px;
  text-transform: capitalize;
`;
const ListItemSubTitle = styled.Text`
  color: ${colors.gray};
`;
