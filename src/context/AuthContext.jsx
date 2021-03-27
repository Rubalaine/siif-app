import axios from "axios";
import React, { createContext, useContext, useEffect, useState } from "react";

const AuthContext = createContext();
export const useAuth = () => useContext(AuthContext);
const data = JSON.parse(window.localStorage.getItem("authData")) || {
  toke: "",
  user: "",
};

const AuthProvider = ({ children }) => {
  const [auth, setAuth] = useState({
    token: data.token,
    user: data.user,
  });
  const loginByEmailAndPassword = async (email, password) => {
    try {
      const { data } = await axios.post("http://localhost:1337/auth/local", {
        identifier: email,
        password: password,
      });
      setAuth({
        token: data.jwt,
        user: data.user.docente,
      });
      console.log(JSON.stringify(auth));
      window.localStorage.setItem("authData", JSON.stringify(auth));
      return "entrou com sucesso";
    } catch (error) {
      console.log(error);
      return "erro";
    }
  };
  return (
    <AuthContext.Provider value={{ auth, setAuth, loginByEmailAndPassword }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
