import React, { useState } from "react";
import { Button, TouchableOpacity, FlatList, Text } from "react-native";

import styled from "styled-components";

//global
import { colors } from "../global/globalStyles";

//comps
import Icon from "./Icon";
import PickerItem from "./PickerItem";

const AppPicker = ({
  icon,
  items,
  onSelectItem,
  PickerItemComponent = PickerItem,
  numberOfColumns = 1,
  selectedItem,
  placeholder,
}) => {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <>
      <TouchableOpacity onPress={() => setModalOpen((prev) => !prev)}>
        <PickerContainer>
          {icon && <Icon name={icon} />}
          <Label selectedItem={selectedItem}>
            {selectedItem ? selectedItem : placeholder}
          </Label>
          <Icon name="chevron-down" />
        </PickerContainer>
      </TouchableOpacity>
      <Modal animationType="slide" visible={modalOpen}>
        <Button
          title="close"
          onPress={() => setModalOpen((prev) => !prev)}
        ></Button>

        <FlatList
          data={items}
          keyExtractor={(item) => item.id.toString()}
          numColumns={numberOfColumns}
          renderItem={({ item }) => {
            return (
              <PickerItemComponent
                onPress={() => {
                  onSelectItem(item);
                  setModalOpen(false);
                }}
                item={item}
              />
            );
          }}
        />
      </Modal>
    </>
  );
};

const PickerContainer = styled.View`
  background-color: ${colors.light};
  border-radius: 50px;
  padding: 15px;
  flex-direction: row;
  align-items: center;
  margin: 10px 0;
`;

const Label = styled.Text`
  color: ${(props) => (props.selectedItem ? colors.dark : colors.medium_gray)};

  flex: 1;
  font-size: 18px;
  margin-left: 20px;
  text-transform: capitalize;
`;

const Modal = styled.Modal`
  background-color: ${colors.light};
`;

export default AppPicker;
