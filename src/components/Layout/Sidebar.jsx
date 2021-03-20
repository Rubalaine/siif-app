import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import Spacer from "../Utils/Spacer";

const Side = styled.div`
  height: 100vh;
  width: 30rem;
  background-color: #203e86;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  font-size: 1.6rem;
`;
const Navigation = styled.nav`
  color: white;
  display: flex;
  flex-direction: column;
`;
const Lnk = styled(Link)`
  border-bottom: 3px solid transparent;
  text-decoration: none;
  color: white;
  padding: 0.5rem 1rem;
  text-transform: uppercase;
  transition: all 0.3s;
  &:hover {
    border-color: white;
  }
`;
const Sidebar = () => {
  return (
    <Side>
      <Navigation>
        <Lnk to="/students">estudante</Lnk>
        <Spacer />
        <Lnk to="/lessons">aulas</Lnk>
      </Navigation>
    </Side>
  );
};

export default Sidebar;
