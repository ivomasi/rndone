import React from "react";

//comps
import Screen from "../components/Screen";
import { AppForm, AppFormField, SubmitButton } from "../components/forms";

import * as yup from "yup";

//register validation
const validationSchema = yup.object().shape({
  registerName: yup.string().required().min(3).max(15).trim().label("Name"),
  registerEmail: yup.string().email().required().trim().label("Email"),
  registerPassword: yup.string().required().min(6).max(15).label("Password"),
});

const RegisterScreen = () => {
  return (
    <Screen>
      <AppForm
        initialValues={{
          registerName: "",
          registerEmail: "",
          registerPassword: "",
        }}
        onSubmit={(values) => {
          const { registerName, registerEmail, registerPassword } = values;

          const trimmed = {
            registerName: registerName.trim(),
            registerEmail: registerEmail.trim(),
            registerPassword,
          };

          console.log(trimmed);
        }}
        validationSchema={validationSchema}
      >
        <AppFormField
          name="registerName"
          icon="person"
          autoCorrect={false}
          autoCapitalize="none"
          placeholder="John Cena"
        />

        <AppFormField
          name="registerEmail"
          icon="email"
          autoCorrect={false}
          autoCapitalize="none"
          keyboardType="email-address"
          placeholder="example@gmail.com"
        />

        <AppFormField
          name="registerPassword"
          icon="lock"
          autoCapitalize="none"
          secureTextEntry
          autoCorrect={false}
          placeholder="nbu123"
        />

        <SubmitButton text={"Register"} />
      </AppForm>
    </Screen>
  );
};

export default RegisterScreen;
