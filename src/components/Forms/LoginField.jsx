import React from "react";
import styled from "styled-components";

const Field = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`;
const Label = styled.label`
  font-size: 1.4rem;
  font-weight: 300;
  margin-bottom: 0.5rem;
`;
const Input = styled.input`
  font-size: 1.4rem;
  border: none;
  height: 4rem;
  padding: 0 1.3rem;
  font-family: inherit;
  border-bottom: 3px solid #45b345;
  box-shadow: 0 0 2px rgba(0, 0, 0, 0.25);
  border-radius: 5px;
  transition: all 0.5s;

  &:placeholder-shown {
    border-color: transparent;
  }
  &:focus {
    outline: none;

    &:invalid {
      border-color: #ff5c5c;
    }
  }
`;
const LoginField = ({ name, label, placeholder, type }) => {
  return (
    <Field>
      <Label htmlFor={name}>{label}</Label>
      <Input
        type={type}
        name={name}
        id={name}
        placeholder={placeholder}
        required
      />
    </Field>
  );
};

export default LoginField;
