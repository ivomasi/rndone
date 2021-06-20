import React from "react";
import { StyleSheet, Text, View } from "react-native";

//styled
import styled from "styled-components";

//icon
import { MaterialIcons } from "@expo/vector-icons";

const Icon = ({
  name,
  size = 24,
  iconColor = "#000",
  backgroundColor = "#fff",
}) => {
  return (
    <IconContainer size={size} radius={size / 2} bgColor={backgroundColor}>
      <MaterialIcons name={name} size={size / 2} color={iconColor} />
    </IconContainer>
  );
};

export default Icon;

const IconContainer = styled.View`
  width: ${(props) => props.size}px;
  height: ${(props) => props.size}px;
  border-radius: ${(props) => props.radius}px;
  background-color: ${(props) => props.bgColor};
  align-items: center;
  justify-content: center;
`;

const styles = StyleSheet.create({});
