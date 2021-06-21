import React from "react";
import { Keyboard } from "react-native";
import styled from "styled-components";

//vaalidation
import * as yup from "yup";

//comps
import Screen from "../components/Screen";
import { AppForm, AppFormField, SubmitButton } from "../components/forms";

//validate inputs
const validationSchema = yup.object().shape({
  email: yup.string().required().email().label("Email"),
  password: yup.string().required().min(6).max(10).label("Password"),
});

const LoginScreen = () => {
  return (
    <Screen>
      <Image source={require("../assets/logo-red.png")} />

      <AppForm
        initialValues={{ email: "", password: "" }}
        onSubmit={(values) => {
          Keyboard.dismiss();
          console.log(values);
        }}
        validationSchema={validationSchema}
      >
        <AppFormField
          name="email"
          icon="email"
          autoCorrect={false}
          autoCapitalize="none"
          keyboardType="email-address"
          placeholder="example@gmail.com"
        />

        <AppFormField
          name="password"
          icon="lock"
          autoCapitalize="none"
          secureTextEntry
          autoCorrect={false}
          placeholder="nbu123"
        />

        <SubmitButton text="LOGIN" />
      </AppForm>
    </Screen>
  );
};

const Image = styled.Image`
  height: 100px;
  width: 100px;
  align-self: center;
  margin: 30px 0;
`;

export default LoginScreen;
