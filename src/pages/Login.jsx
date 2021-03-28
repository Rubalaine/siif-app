import { Form, Input, Button, Row, Col, Alert } from "antd";
import { MailOutlined, LockOutlined } from "@ant-design/icons";
import { useEffect, useState } from "react";
import { useAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const Login = () => {
  const [loading, setLoading] = useState(false);
  const { auth, setAuth } = useAuth();
  const [erro, setErro] = useState("");
  useEffect(() => {
    document.title = "Entrar | Sistema de gerenciamento de assiduidade";
  }, []);
  useEffect(() => {
    console.log("on effects | ", auth);
    if (auth.token && auth.user) {
      console.log("[auth] ", JSON.stringify(auth));
      window.localStorage.setItem("authData", JSON.stringify(auth));
      return navigate(`/${auth.user.id}`);
    }
    // eslint-disable-next-line
  }, [auth]);
  const navigate = useNavigate();
  const onFinish = (values) => {
    setErro("");
    setLoading(true);
    axios
      .post("http://localhost:1337/auth/local", {
        identifier: values.email,
        password: values.password,
      })
      .then((res) => {
        console.log(res);
        setAuth({
          token: res.data.jwt,
          user: res.data.user.docente,
        });
        console.log(auth);
      })
      .catch((error) => {
        if (error.request) return setErro("erro inesperado ao entrar");
        if (error.response)
          return setErro("o Email e a senha não podem diferir");
        return setErro("erro inesperado ao entrar");
      })
      .finally(() => {
        setLoading(false);
      });
    // setErro("");
    // try {
    //   setLoading(true);
    //   const res = await loginByEmailAndPassword(values.email, values.password);
    //   if (res === "requestError") setErro("erro inesperado ao entrar");
    //   if (res === "responseError")
    //     setErro("o Email e a senha não podem diferir");
    //   if (res === "success") return navigate(`/${auth.user.id}`);
    // } catch (error) {
    //   console.log(error);
    // } finally {
    //   setLoading(false);
    // }
  };

  return (
    <Row
      justify="center"
      color="indigo"
      align="middle"
      style={{ height: "100vh" }}
    >
      <Col>
        <Form
          name="normal_login"
          className="login-form"
          initialValues={{ remember: true }}
          onFinish={onFinish}
          size="large"
          style={{
            width: "400px",
          }}
        >
          {erro ? (
            <Alert
              message="Erro"
              description={erro}
              type="error"
              showIcon
              closable
              style={{ marginBottom: "20px" }}
            />
          ) : null}

          <Form.Item name="email">
            <Input prefix={<MailOutlined />} type="email" placeholder="email" />
          </Form.Item>
          <Form.Item name="password">
            <Input
              prefix={<LockOutlined />}
              type="password"
              placeholder="Password"
            />
          </Form.Item>

          <Form.Item>
            <Button
              block
              type="primary"
              htmlType="submit"
              loading={loading}
              className="login-form-button"
            >
              {loading ? "Aguarde..." : "Entrar"}
            </Button>
          </Form.Item>
        </Form>
      </Col>
    </Row>
  );
};

export default Login;
