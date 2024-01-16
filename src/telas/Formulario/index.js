import Tela from "componentes/Tela";
import styles from "./Formulario.module.css";
import Inputs from "componentes/Inputs";
import BlocoForm from "componentes/BlocoForm";
import Botao from "componentes/Botao";
import Logo from "img/logoResoluti.webp";
import { useState } from "react";
import FormEndereco from "./Forms/FormEnderecos";
import FormContatos from "./Forms/FormContatos";

export default function Cadastro() {
  const [dadosPessoais, setDadosPessoais] = useState({
    nome: "",
    sobrenome: "",
    data: "",
    email: "",
    cpf: "",
    rg: "",
  });
  const [enderecos, setEnderecos] = useState([
    {
      id: 1,
      logradouro: "",
      numero: "",
      cep: "",
      complemento: "",
      cidade: "",
      estado: "",
    },
  ]);
  const [contatos, setContatos] = useState([
    {
      id: 1,
      nome: "",
      contato: "",
      tipoContato: "",
    },
  ]);

  const addNovoEndereco = () => {
    setEnderecos((prevEnderecos) => [
      ...prevEnderecos,
      {
        id: prevEnderecos.length + 1,
        logradouro: "",
        numero: "",
        cep: "",
        complemento: "",
        cidade: "",
        estado: "",
      },
    ]);
  };

  const addNovoContato = () => {
    setContatos((prevContato) => [
      ...prevContato,
      {
        id: prevContato + 1,
        nome: "",
        contato: "",
        tipoContato: "",
      },
    ]);
  };

  const deleteEndereco = () => {
    console.log("Deletado");
  };

  return (
    <Tela>
      <img className={styles.logo} src={Logo} />

      <div className={styles.container}>
        <h1 className={styles.titulo}>Cadastrar pessoa física</h1>

        <BlocoForm titulo={"Dados pessoais"}>
          <div className={styles.form}>
            <Inputs
              estilosContainer={styles.tamanhoInputs}
              label={"Nome"}
              placeholder={"Insira o nome"}
            />
            <Inputs
              estilosContainer={styles.tamanhoInputs}
              label={"Sobrenome"}
              placeholder={"Insira o sobrenome"}
            />
            <Inputs
              estilosContainer={styles.tamanhoInputs}
              type="date"
              label={"Data de nascimento"}
              placeholder={"00/00/0000"}
            />
            <Inputs
              estilosContainer={styles.tamanhoInputs}
              label={"Email"}
              placeholder={"Insira o email"}
            />
            <Inputs
              estilosContainer={styles.tamanhoInputs}
              label={"CPF"}
              placeholder={"Insira o CPF"}
            />
            <Inputs
              estilosContainer={styles.tamanhoInputs}
              label={"RG"}
              placeholder={"Insira o RG"}
            />
          </div>
        </BlocoForm>

        <BlocoForm
          hasButtons={true}
          titulo={"Endereços"}
          onClickAdd={() => addNovoEndereco()}
        >
          {enderecos.map((e) => {
            return (
              <>
                <FormEndereco
                  onClickRemove={() => deleteEndereco()}
                  key={e.id}
                  estilosForm={styles.form}
                  tamanhoInputs={styles.tamanhoInputs}
                />
                <Botao value={"Excluir"} estiloSecundario={styles.bttExcluir}>
                  Excluir
                </Botao>
                <div className={styles.separadorInterno} />
              </>
            );
          })}
        </BlocoForm>

        <BlocoForm
          onClickAdd={() => addNovoContato()}
          titulo={"Contatos"}
          hasButtons={true}
        >
          {contatos.map((c) => {
            return (
              <>
                <FormContatos
                  tamanhoInputs={styles.tamanhoInputs}
                  estiloForm={styles.form}
                />
                <Botao value={"Excluir"} estiloSecundario={styles.bttExcluir}>
                  Excluir
                </Botao>
                <div className={styles.separadorInterno} />
              </>
            );
          })}
        </BlocoForm>

        <div className={styles.centralizarBotao}>
          <Botao
            estiloSecundario={styles.botaoFinalizar}
            value={"Finalizar e enviar"}
          />
        </div>
      </div>
    </Tela>
  );
}
