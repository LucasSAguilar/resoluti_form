import Tela from "componentes/Tela";
import styles from "./Formulario.module.css";
import Inputs from "componentes/Inputs";
import BlocoForm from "componentes/BlocoForm";
import Botao from "componentes/Botao";
import Logo from "img/logoResoluti.webp";
import { useEffect, useState } from "react";
import FormEndereco from "./Forms/FormEnderecos";
import FormContatos from "./Forms/FormContatos";
import {
  addNovoContato,
  addNovoEndereco,
  organizarID,
  excluirForm,
} from "./Funcoes/funcoes.js";

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
      id: 0,
      logradouro: "",
      numero: "",
      cep: "",
      complemento: "",
      cidade: "",
      estado: "",
    },
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
      id: 0,
      nome: "",
      contato: "",
      tipoContato: "",
    },
  ]);

  const excluirForm = (id, set, form) => {
    const novoArray = form.filter((item) => item.id !== id);
    set(novoArray);
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
          onClickAdd={() => addNovoEndereco(setEnderecos)}
        >
          {enderecos.map((e) => {
            return (
              <div key={e.id}>
                <FormEndereco
                  estilosForm={styles.form}
                  tamanhoInputs={styles.tamanhoInputs}
                />
                <Botao
                  onClick={() => {
                    excluirForm(e.id, setEnderecos, enderecos);
                  }}
                  value={"Excluir"}
                  estiloSecundario={styles.bttExcluir}
                >
                  Excluir
                </Botao>
                <div className={styles.separadorInterno} />
              </div>
            );
          })}
        </BlocoForm>

        <BlocoForm
          onClickAdd={() => addNovoContato(setContatos)}
          titulo={"Contatos"}
          hasButtons={true}
        >
          {contatos.map((c) => {
            return (
              <div key={c.id}>
                <FormContatos
                  tamanhoInputs={styles.tamanhoInputs}
                  estiloForm={styles.form}
                />
                <Botao
                  onClick={() => {
                    excluirForm(c.id, setContatos, contatos);
                  }}
                  value={"Excluir"}
                  estiloSecundario={styles.bttExcluir}
                >
                  Excluir
                </Botao>
                <div className={styles.separadorInterno} />
              </div>
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
