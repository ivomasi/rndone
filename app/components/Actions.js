import React from "react";
import {} from "react-native";
import styled from "styled-components/native";

//icons
import { AntDesign } from "@expo/vector-icons";

//global styles
import { colors } from "../global/globalStyles";

const Actions = ({ handleDelete, handleArchive }) => {
  return (
    <ActionContainer>
      <AntDesign name="inbox" size={30} color="black" onPress={handleArchive} />
      <AntDesign name="delete" size={30} color="black" onPress={handleDelete} />
    </ActionContainer>
  );
};

export default Actions;

const ActionContainer = styled.View`
  width: 120px;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
  border-left-width: 1px;
`;
