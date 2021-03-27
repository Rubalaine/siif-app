import React from "react";
import { Route, Routes } from "react-router-dom";
import AuthProvider from "./context/AuthContext";
import Home from "./pages/Home";
import Login from "./pages/Login";
const App = () => {
  return (
    <AuthProvider>
      <Routes>
        <Route path="/*" element={<Home />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </AuthProvider>
  );
};

export default App;
