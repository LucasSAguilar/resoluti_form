import Tela from "componentes/Tela";
import styles from "./Login.module.css";
import Inputs from "componentes/Inputs";
import Botao from "componentes/Botao";
import Logo from "img/logoResoluti.webp";
import { Link, useNavigate } from "react-router-dom";

export default function Cadastro() {
  const navigate = useNavigate();

  return (
    <Tela>
      <img className={styles.logo} src={Logo} />
      <div className={styles.container}>
        <div className={styles.form}>
          <h3>Login</h3>
          <Inputs
            estilosContainer={styles.estilosContainer}
            label={"Username"}
            placeholder={"Insira seu username"}
          />
          <Inputs
            estilosContainer={styles.estilosContainer}
            label={"Senha"}
            placeholder={"Insira sua senha"}
          />
          <p className={styles.alerta}>Usuário não encontrado</p>
          <Botao
            value={"Entrar"}
            onClick={() => {
              navigate("/formulario");
            }}
          />
        </div>
        <Link to={"/cadastro"}>Não tem uma conta? Clique aqui</Link>
      </div>
    </Tela>
  );
}
