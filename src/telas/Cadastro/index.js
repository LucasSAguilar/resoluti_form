import Tela from "componentes/Tela";
import styles from "./Cadastro.module.css";
import Logo from "img/logoResoluti.webp";
import Input from "componentes/Inputs";
import Botao from "componentes/Botao";

export default function Cadastro() {
  return (
    <Tela>
      <img className={styles.logo} src={Logo} />
      <div className={styles.containerLogin}>
        <div className={styles.conteudo}>
          <input className={styles.inputImagem} type="file" />
          <div className={styles.form}>
            <Input label={"Username"} placeholder={"Insira seu usuário"} />
            <Input
              type={"password"}
              label={"Senha"}
              placeholder={"Insira seu usuário"}
            />
            <Input label={"Email"} placeholder={"Insira seu usuário"} />
            <Input label={"Telefone"} placeholder={"Insira seu usuário"} />
          </div>
        </div>
        <Botao value={"Cadastrar"} />
      </div>
    </Tela>
  );
}
