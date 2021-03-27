import { Layout } from "antd";
import { Route, Routes } from "react-router-dom";
import Alunos from "../components/Layouts/Alunos";
import Aulas from "../components/Layouts/Aulas";
import Disciplinas from "../components/Layouts/Disciplinas";
import Sidebar from "../components/Layouts/Sidebar";
import { useAuth } from "../context/AuthContext";
import { Navigate } from "react-router-dom";
const { Header, Content } = Layout;

const Home = () => {
  const { auth } = useAuth();
  return auth.user && auth.token ? (
    <Layout style={{ minHeight: "100vh" }}>
      <Sidebar />
      <Layout className="site-layout">
        <Header style={{ padding: 0, backgroundColor: "#ffff" }} />
        <Content
          style={{ margin: "16px", backgroundColor: "#ffff", padding: "16px" }}
        >
          <Routes>
            <Route path="/:id" element={<Aulas />} />
            <Route path="/alunos" element={<Alunos />} />
            <Route path="/aulas" element={<Aulas />} />
            <Route path="/disciplinas" element={<Disciplinas />} />
          </Routes>
        </Content>
      </Layout>
    </Layout>
  ) : (
    <Navigate to="/login" />
  );
};

export default Home;
