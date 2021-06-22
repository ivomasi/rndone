import React from "react";

import styled from "styled-components";

//global
import { colors } from "../global/globalStyles";

//comps
import Icon from "./Icon";

const AppTextInput = ({ icon, ...otherProps }) => {
  return (
    <TextInputContainer>
      {icon && <Icon name={icon} />}
      <TextInput
        onChangeText={(value) => setInput(value)}
        {...otherProps}
        placeholderTextColor={colors.medium_gray}
      />
    </TextInputContainer>
  );
};

const TextInputContainer = styled.View`
  background-color: ${colors.light};
  border-radius: 50px;
  padding: 15px;
  flex-direction: row;
  align-items: center;
  margin: 10px 0;
`;

const TextInput = styled.TextInput`
  color: ${colors.dark};
  flex: 1;
  font-size: 18px;
  margin-left: 20px;
`;

export default AppTextInput;
