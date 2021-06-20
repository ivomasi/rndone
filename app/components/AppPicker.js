import React, { useState } from "react";
import { Button, TouchableOpacity, FlatList, Text } from "react-native";

import styled from "styled-components";

//global
import { colors } from "../global/globalStyles";

//comps
import Icon from "./Icon";

const AppPicker = ({ icon, items }) => {
  const [modalOpen, setModalOpen] = useState(false);
  const [label, setLabel] = useState("categories");

  const handleSelect = (e, item) => {
    console.log(e);
    setLabel(item.category);
    setModalOpen(false);
  };

  return (
    <>
      <PickerContainer>
        {icon && <Icon name="apps" />}
        <Label>{label}</Label>
        <TouchableOpacity onPress={() => setModalOpen((prev) => !prev)}>
          <Icon name={icon} />
        </TouchableOpacity>
      </PickerContainer>
      <Modal animationType="slide" visible={modalOpen}>
        <Button
          title="close"
          onPress={() => setModalOpen((prev) => !prev)}
        ></Button>

        <FlatList
          data={items}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => {
            return (
              <PickerItem onPress={() => handleSelect(item)}>
                <Text>{item.category}</Text>
              </PickerItem>
            );
          }}
        />
      </Modal>
    </>
  );
};

const PickerItem = styled.TouchableOpacity`
  padding: 20px;
`;

const PickerContainer = styled.View`
  background-color: ${colors.medium_gray};
  border-radius: 50px;
  padding: 15px;
  flex-direction: row;
  align-items: center;
`;

const Label = styled.Text`
  color: ${colors.dark};

  flex: 1;
  font-size: 18px;
  margin-left: 20px;
  text-transform: capitalize;
`;

const Modal = styled.Modal`
  background-color: ${colors.light};
`;

export default AppPicker;
