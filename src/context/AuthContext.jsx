
import React, { createContext, useContext, useState } from "react";

export const AuthContext = createContext();
export const useAuth = () => useContext(AuthContext);
const data = JSON.parse(window.localStorage.getItem("authData")) || {
  token: "",
  user: {},
};

const AuthProvider = ({ children }) => {
  const [auth, setAuth] = useState({
    token: data.token,
    user: data.user,
  });
  // const loginByEmailAndPassword = (email, password) => {
  //   console.log("before ", auth);
  //   axios
  //     .post("http://localhost:1337/auth/local", {
  //       identifier: email,
  //       password: password,
  //     })
  //     .then((res) => {
  //       console.log(res);
  //       setAuth({
  //         ...auth,
  //         token: res.data.jwt,
  //         user: res.data.user.docente,
  //       });
  //       console.log(auth);
  //       if (auth.token && auth.user) {
  //         console.log("[auth] ", JSON.stringify(auth));
  //         window.localStorage.setItem("authData", JSON.stringify(auth));
  //         // return "success";
  //       }
  //     })
  //     .catch((error) => {
  //       if (error.request) return "requestError";
  //       if (error.response) return "responseError";
  //       return "requestError";
  //     });
  // };
  return (
    <AuthContext.Provider value={{ auth, setAuth }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
