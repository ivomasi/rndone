import React from "react";

//styled
import styled from "styled-components/native";

//st
import { colors } from "../global/globalStyles";

const Separator = () => {
  return <Separate bgColor={colors.light} />;
};

export default Separator;

const Separate = styled.View`
  width: 100%;
  height: 1px;
  background-color: ${(props) => props.bgColor};
`;
