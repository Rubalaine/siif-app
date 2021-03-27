import { Form, Input, Button, Row, Col } from "antd";
import { MailOutlined, LockOutlined } from "@ant-design/icons";
import { useState } from "react";
import { useAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [loading, setLoading] = useState(false);
  const { auth, loginByEmailAndPassword } = useAuth();
  const navigate = useNavigate();
  const onFinish = async (values) => {
    try {
      setLoading(true);
      const res = await loginByEmailAndPassword(values.email, values.password);
      if (res !== "error") return navigate(`/${auth.user.id}`);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Row justify="center" align="middle" style={{ height: "100vh" }}>
      <Col >
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
