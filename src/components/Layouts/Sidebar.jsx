import { Layout, Menu } from "antd";
import {
  UserOutlined,
  ClockCircleOutlined,
  DatabaseOutlined,
} from "@ant-design/icons";
import { useEffect, useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";
const { Sider } = Layout;
const Logo = styled.div`
  height: 32px;
  margin: 16px;
  background: rgba(255, 255, 255, 0.3);
`;
const Lnk = styled(Link)`
  text-decoration: none;
  color: inherit;
`;

const Sidebar = () => {
  const [collapsed, setCollapsed] = useState(false);
  const handleCollapse = (collapse) => {
    setCollapsed(collapse);
  };
  const { auth } = useAuth();
  return (
    <Sider collapsible collapsed={collapsed} onCollapse={handleCollapse}>
      <Logo />
      <Menu theme="dark" defaultSelectedKeys={["1"]} mode="inline">
        <Menu.Item key="1" icon={<ClockCircleOutlined />}>
          <Lnk to={`/${auth.user.id}`}>Aulas</Lnk>
        </Menu.Item>
        <Menu.Item key="2" icon={<UserOutlined />}>
          <Lnk to="/alunos">Alunos</Lnk>
        </Menu.Item>
        <Menu.Item key="9" icon={<DatabaseOutlined />}>
          <Lnk to="/disciplinas">Disciplinas</Lnk>
        </Menu.Item>
      </Menu>
    </Sider>
  );
};

export default Sidebar;
