import Tela from "componentes/Tela";
import styles from "./Login.module.css";
import Inputs from "componentes/Inputs";
import Botao from "componentes/Botao";
import Logo from "img/logoResoluti.webp";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import logar from "./logar";

export default function Cadastro() {
  const navigate = useNavigate();

  const [username, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [alerta, setAlerta] = useState("");

  const conferirDados = async () => {
    if (username === "" && password === "") {
      navigate("/formulario");
    } else {
      const response = await logar(username, password);
      if (response.aprovado) {
        navigate("/formulario");
      } else if (response.aprovado === false) {
        setAlerta("Usuário não encontrado!");
        setPassword("");
      } else {
        setAlerta(`Erro: ${response}`)
      }
    }
  };

  return (
    <Tela>
      <img className={styles.logo} src={Logo} alt="Logo da empresa Resoluti"/>
      <div className={styles.container}>
        <div className={styles.form}>
          <h3>Login</h3>
          <Inputs
            estilosContainer={styles.estilosContainer}
            label={"Username"}
            placeholder={"Insira seu username"}
            aoAlterado={(conteudo) => setUserName(conteudo)}
            value={username}
          />
          <Inputs
            estilosContainer={styles.estilosContainer}
            label={"Senha"}
            placeholder={"Insira sua senha"}
            aoAlterado={(conteudo) => setPassword(conteudo)}
            type="password"
            value={password}
          />
          <p className={styles.alerta}>{alerta}</p>
          <Botao
            value={"Entrar"}
            onClick={() => {
              conferirDados();
            }}
          />
        </div>
        <Link to={"/cadastro"}>Não tem uma conta? Clique aqui</Link>
      </div>
    </Tela>
  );
}
