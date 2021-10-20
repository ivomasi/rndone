import React from "react";
import { TouchableHighlight } from "react-native";

//sytled
import styled from "styled-components/native";

//gesture
import Swipeable from "react-native-gesture-handler/Swipeable";

//styles
import { colors } from "../global/globalStyles";

//icon
import { MaterialCommunityIcons } from "@expo/vector-icons";

const ListItem = ({
  image,
  IconComponent,
  title,
  subTitle,
  onPress,
  renderRightActions,
}) => {
  return (
    <Swipeable renderRightActions={renderRightActions}>
      <TouchableHighlight underlayColor={colors.light} onPress={onPress}>
        <ListItemContainer>
          {IconComponent}
          {image && <ListItemImage source={image} />}

          <ListItemText>
            {title && <ListItemTitle numberOfLines={1}>{title}</ListItemTitle>}
            {subTitle && (
              <ListItemSubTitle numberOfLines={2}>{subTitle}</ListItemSubTitle>
            )}
          </ListItemText>
          {renderRightActions && (
            <Arrow name="chevron-left" size={24} color="black" />
          )}
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
  position: relative;
`;

const ListItemImage = styled.Image`
  width: 70px;
  height: 70px;
  border-radius: 50px;
  margin-right: 10px;
`;

const ListItemText = styled.View`
  margin-left: 20px;
  width: 70%;
`;

const ListItemTitle = styled.Text`
  margin-bottom: 5px;

  font-size: 20px;
  text-transform: capitalize;
`;
const ListItemSubTitle = styled.Text`
  color: ${colors.gray};
`;

const Arrow = styled(MaterialCommunityIcons)``;
