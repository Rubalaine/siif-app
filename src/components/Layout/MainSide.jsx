import React from "react";
import styled from "styled-components";
import TopBar from "./TopBar";
const Side = styled.div`
  width: 100%;
`;
const MainSide = () => {
  return (
    <Side>
      <TopBar username="kelven rubalaine"></TopBar>
    </Side>
  );
};

export default MainSide;
