import React from "react";
import styled from "styled-components";
import LoginField from "./LoginField";
import Spacer from "./../Utils/Spacer";
import Button from "../Buttons/Button";
import { useNavigate } from "react-router-dom";
const Form = styled.form`
  width: 40rem;
  padding: 3rem;
  background-color: #f2f2f2;
  border-radius: 5px;
  box-shadow: 0 0 10px rgb(0 0 0 / 24%);
`;
const LoginForm = () => {
  const navigate = useNavigate();
  const handleSubmit = (event) => {
    event.preventDefault();
    navigate('/')
  };
  return (
    <Form onSubmit={handleSubmit}>
      <LoginField
        type="email"
        name="email"
        placeholder="insira o seu email"
        label="e-mail"
      />
      <Spacer size={2} />
      <LoginField
        name="password"
        type="password"
        placeholder="insira a sua palavra passe"
        label="palavra passe"
      />
      <Spacer size={2} />
      <Button full>entrar</Button>
    </Form>
  );
};

export default LoginForm;
