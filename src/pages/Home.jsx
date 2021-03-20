import React from "react";
import MainSide from "../components/Layout/MainSide";
import Sidebar from "../components/Layout/Sidebar";
import AppWrapper from "../components/Wrappers/AppWrapper";

const Home = () => {
  return (
    <AppWrapper>
      <Sidebar />
      <MainSide />
    </AppWrapper>
  );
};

export default Home;
