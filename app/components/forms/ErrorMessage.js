import React from "react";

//styled
import styled from "styled-components";

const ErrorMessage = ({ error, visible }) => {
  if (!error || !visible) return null;
  return <ErrorComponent>{error}</ErrorComponent>;
};

const ErrorComponent = styled.Text`
  padding: 10px;
  text-align: left;
  color: red;
`;

export default ErrorMessage;
