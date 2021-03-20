import React from "react";
import styled from "styled-components";
const Wrapper = styled.div`
  display: flex;
`;
const AppWrapper = ({ children }) => <Wrapper>{children}</Wrapper>;

export default AppWrapper;
