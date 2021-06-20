import React, { useState } from "react";

import styled from "styled-components";

//global
import { colors } from "../global/globalStyles";

//comps
import Icon from "./Icon";

const AppTextInput = ({ icon }) => {
  const [input, setInput] = useState("");

  return (
    <TextInputContainer>
      {icon && <Icon name={icon} />}
      <TextInput onChangeText={(value) => setInput(value)} />
    </TextInputContainer>
  );
};

const TextInputContainer = styled.View`
  background-color: ${colors.medium_gray};
  border-radius: 50px;
  padding: 15px;
  flex-direction: row;
  align-items: center;
`;

const TextInput = styled.TextInput`
  color: ${colors.dark};
  flex: 1;
  font-size: 18px;
  margin-left: 20px;
`;

export default AppTextInput;
