import { Button, Divider, Space, Table } from "antd";
import Text from "antd/lib/typography/Text";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";

const Aula = () => {
  const params = useParams();
  const [aula, setAula] = useState({});
  const [comuter, setComuter] = useState(false);
  const [estudantes, setEstudantes] = useState([]);
  const [presentes, setPresentes] = useState([]);
  const { auth } = useAuth();
  useEffect(() => {
    console.log(params);
    async function fetchData() {
      const { data } = await axios.get(
        `http://localhost:1337/aulas/${params.aula}`,
        {
          headers: {
            Authorization: `Bearer ${auth.token}`,
          },
        }
      );
      setPresentes(...[data.presentes.map((el) => el.id)]);
      setAula({
        ...aula,
        ...data,
      });
      return data;
    }
    fetchData().then((res) => {
      async function fetchStudents() {
        const { data } = await axios.get(
          `http://localhost:1337/disciplinas/${res.disciplina.id}`,
          {
            headers: {
              Authorization: `Bearer ${auth.token}`,
            },
          }
        );
        console.log(data);
        setEstudantes(
          data.inscritos.map((estudante) => {
            return {
              codigo: estudante.codigo,
              apelido: estudante.apelido,
              nome: estudante.nome,
              key: estudante.id,
              acao: estudante.id,
            };
          })
        );
      }
      fetchStudents();
    });
    // eslint-disable-next-line
  }, [params, comuter]);
  const handlePresente = async (id) => {
    try {
      const { data } = await axios({
        method: "PUT",
        data: {
          presentes: [...presentes, id],
        },
        url: `http://localhost:1337/aulas/${params.aula}`,
        headers: {
          Authorization: `Bearer ${auth.token}`,
        },
      });
      setComuter(!comuter);
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };
  const columns = [
    {
      title: "Código",
      dataIndex: "codigo",
      key: "codigo",
    },
    {
      title: "Apélido",
      dataIndex: "apelido",
      key: "apelido",
    },
    {
      title: "Outros Nomes",
      dataIndex: "nome",
      key: "nome",
    },
    {
      title: "Ação",
      dataIndex: "acao",
      key: "acao",
      render: (el) => (
        <Space direction="horizontal">
          <Button
            disabled={presentes.includes(el)}
            onClick={() => {
              handlePresente(el);
            }}
            type="primary"
          >
            Presente
          </Button>
        </Space>
      ),
    },
  ];
  return (
    <>
      <Space direction="vertical" style={{ marginBottom: "25px" }}>
        <Text>aula {aula.id}</Text>
        <Text strong>Tema: {aula.tema}</Text>
        <Text>
          Data:{" "}
          {new Date(aula.dia).toLocaleString("pt-pt", {
            month: "long",
            day: "numeric",
            year: "numeric",
          })}
        </Text>
        <Text>
          Sala {aula.sala.numero} {aula.sala.localizacao}, Turma:{" "}
          {aula.sala.turma}
        </Text>
        <Text>
          Duracao: {aula.inicio} ás {aula.fim}
        </Text>
      </Space>
      <Divider />
      <Table dataSource={estudantes} columns={columns} />
    </>
  );
};

export default Aula;
