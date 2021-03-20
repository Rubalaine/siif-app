import React from "react";
import styled from "styled-components";
const Wrapper = styled.div`
  display: flex;
  height: 100vh;
  background-image: linear-gradient(
    105deg,
    #203e86 0%,
    #203e86 50%,
    transparent 50%
  );
  justify-content: center;
  align-items: center;
`;
const LoginWrapper = ({ children }) => <Wrapper>{children}</Wrapper>;

export default LoginWrapper;
