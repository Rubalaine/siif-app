import { Button, Table } from "antd";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";

const Aulas = () => {
  const navigate = useNavigate();
  const columns = [
    {
      title: "Nr",
      dataIndex: "nr",
      key: "nr",
    },
    {
      title: "Turma",
      dataIndex: "turma",
      key: "turma",
    },
    {
      title: "Dia",
      dataIndex: "dia",
      key: "dia",
    },
    {
      title: "Inicio",
      dataIndex: "inicio",
      key: "inicio",
    },
    {
      title: "Fim",
      dataIndex: "fim",
      key: "fim",
    },
    {
      title: "Tipo",
      dataIndex: "tipo",
      key: "tipo",
    },
    {
      title: "Estado",
      dataIndex: "estado",
      key: "estado",
    },
    {
      title: "Ação",
      dataIndex: "acao",
      key: "acao",
      render: (el) => (
        <Button
          onClick={() => {
            navigate(`/aula/${el}`);
          }}
          type="primary"
        >
          dar aula
        </Button>
      ),
    },
  ];
  const [dataSource, setDatasource] = useState([]);
  const params = useParams();
  const { auth } = useAuth();
  useEffect(() => {
    async function fetchData() {
      const { data } = await axios.get(
        `http://localhost:1337/aulas?disciplina.docente=${params.id}`,
        {
          headers: {
            Authorization: `Bearer ${auth.token}`,
          },
        }
      );
      console.log(data);
      document.title = data[0].disciplina.nome;
      setDatasource(
        data.map((el) => {
          return {
            nr: el.id,
            acao: el.id,
            turma: el.sala.turma,
            inicio: el.inicio.substr(0, 5),
            fim: el.fim.substr(0, 5),
            dia: new Date(el.dia).toLocaleString("pt-pt", {
              month: "long",
              day: "numeric",
              year: "numeric",
            }),
            estado: el.pendente ? "pendente" : "dada",
            tipo: el.tipo.toLowerCase(),
            key: el.id,
          };
        })
      );
    }
    fetchData();
    // eslint-disable-next-line
  }, []);
  return <Table dataSource={dataSource} columns={columns} />;
};

export default Aulas;
