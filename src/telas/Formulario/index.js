import Tela from "componentes/Tela";
import styles from "./Formulario.module.css";
import Inputs from "componentes/Inputs";
import BlocoForm from "componentes/BlocoForm";
import Botao from "componentes/Botao";
import Logo from "img/logoResoluti.webp";
import { realizarCadastro } from "./cadastroPessoa.js";
import { useState } from "react";
import FormEndereco from "./Forms/FormEnderecos";
import FormContatos from "./Forms/FormContatos";
import {
  addNovoContato,
  addNovoEndereco,
  resetarForm,
  excluirForm,
} from "./Funcoes/funcoes.js";

export default function Cadastro() {
  const [alerta, setAlerta] = useState("");

  const [dadosPessoais, setDadosPessoais] = useState({
    nome: "",
    sobrenome: "",
    nascimento: "",
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
      estado: "ac",
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

  const alterarDadosPessoais = (field, valor) => {
    setDadosPessoais((prevDados) => ({
      ...prevDados,
      [field]: valor,
    }));
  };

  const iniciarEnvio = async () => {
    const response = await realizarCadastro(dadosPessoais, enderecos, contatos);
    if (response.efetuado) {
      resetarForm(setDadosPessoais, setContatos, setEnderecos);
      alert("Cadastro realizado com sucesso!")
    } else {
      setAlerta(`Ocorreu um erro: ${response}`);
    }
  };

  return (
    <Tela>
      <img className={styles.logo} src={Logo} alt="Logo da empresa Resoluti"/>
      <div className={styles.container}>
        <h1 className={styles.titulo}>Cadastrar pessoa física</h1>

        <BlocoForm titulo={"Dados pessoais"}>
          <div className={styles.form}>
            <Inputs
              estilosContainer={styles.tamanhoInputs}
              label={"Nome"}
              placeholder={"Insira o nome"}
              aoAlterado={(value) => alterarDadosPessoais("nome", value)}
              value={dadosPessoais.nome}
            />
            <Inputs
              estilosContainer={styles.tamanhoInputs}
              label={"Sobrenome"}
              placeholder={"Insira o sobrenome"}
              aoAlterado={(value) => alterarDadosPessoais("sobrenome", value)}
              value={dadosPessoais.sobrenome}
            />
            <Inputs
              estilosContainer={styles.tamanhoInputs}
              type="date"
              label={"Data de nascimento"}
              placeholder={"00/00/0000"}
              aoAlterado={(value) => alterarDadosPessoais("nascimento", value)}
              value={dadosPessoais.nascimento}
            />
            <Inputs
              estilosContainer={styles.tamanhoInputs}
              label={"Email"}
              type="email"
              placeholder={"Insira o email"}
              aoAlterado={(value) => alterarDadosPessoais("email", value)}
              value={dadosPessoais.email}
            />
            <Inputs
              estilosContainer={styles.tamanhoInputs}
              label={"CPF"}
              placeholder={"Insira o CPF"}
              aoAlterado={(value) => alterarDadosPessoais("cpf", value)}
              value={dadosPessoais.cpf}
            />
            <Inputs
              estilosContainer={styles.tamanhoInputs}
              label={"RG"}
              placeholder={"Insira o RG"}
              aoAlterado={(value) => alterarDadosPessoais("rg", value)}
              value={dadosPessoais.rg}
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
                  setEndereco={setEnderecos}
                  endereco={e}
                  form={enderecos}
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
                  contato={c}
                  form={contatos}
                  setContatos={setContatos}
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

        <p className={styles.alerta}>{alerta}</p>
        <div className={styles.centralizarBotao}>
          <Botao
            estiloSecundario={styles.botaoFinalizar}
            value={"Finalizar e enviar"}
            onClick={() => iniciarEnvio()}
          />
        </div>
      </div>
    </Tela>
  );
}
