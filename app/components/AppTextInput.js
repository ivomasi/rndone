import React, { useState } from "react";
import { Text } from "react-native";

import styled from "styled-components";

const AppTextInput = () => {
  const [input, setInput] = useState("");

  return (
    <>
      <Text>{input}</Text>
      <TextInput onChangeText={(value) => setInput(value)} />
    </>
  );
};

const TextInput = styled.TextInput`
  border-bottom-width: 2px;
`;

export default AppTextInput;
