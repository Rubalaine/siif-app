import React from "react";
import styled from "styled-components";

const Top = styled.div`
  width: 100%;
  background-color: #f2f2f2;
  padding: 1.5rem;
  display: flex;
`;
const User = styled.p`
  margin-left: auto;
  color: black;
  font-size: 1.6rem;
  font-weight: 500;
`;
const TopBar = ({ username }) => {
  return (
    <Top>
      <User>{username}</User>
    </Top>
  );
};

export default TopBar;
