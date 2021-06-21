import React from "react";

import { Formik } from "formik";

import styled from "styled-components";

const AppForm = ({ initialValues, onSubmit, validationSchema, children }) => {
  return (
    <Formik
      initialValues={initialValues}
      onSubmit={onSubmit}
      validationSchema={validationSchema}
    >
      {() => <FormContainer>{children}</FormContainer>}
    </Formik>
  );
};

const FormContainer = styled.View`
  min-height: 250px;
  justify-content: space-around;
`;

export default AppForm;
