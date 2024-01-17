import Tela from "componentes/Tela";
import styles from "./Cadastro.module.css";
import Logo from "img/logoResoluti.webp";
import Input from "componentes/Inputs";
import Botao from "componentes/Botao";
import { useState } from "react";
import realizarCadastro from "./cadastrar.js";

export default function Cadastro() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [telefone, setTelefone] = useState("");
  const [imagem, setImagem] = useState(null);

  const mudarImagem = (event) => {
    const file = event.target.files[0];
    setImagem(file);
  };

  const iniciarCadastro = async () => {
    const response = await realizarCadastro(
      imagem,
      username,
      password,
      email,
      telefone
    );
    console.log(response);
  };

  return (
    <Tela>
      <img className={styles.logo} src={Logo} />
      <div className={styles.containerLogin}>
        <div className={styles.conteudo}>
          <div className={styles.containerInputImagem}>
            <label htmlFor="inputImagem" className={styles.labelImagem}>
              Insira sua imagem
            </label>
            <input
              id="inputImagem"
              className={styles.inputImagem}
              type="file"
              onChange={(e) => mudarImagem(e)}
            />
          </div>
          <div className={styles.form}>
            <Input
              label={"Username"}
              placeholder={"Insira seu usuário"}
              aoAlterado={(conteudo) => setUsername(conteudo)}
              value={username}
            />
            <Input
              type={"password"}
              label={"Senha"}
              placeholder={"Insira sua senha"}
              aoAlterado={(conteudo) => setPassword(conteudo)}
              value={password}
            />
            <Input
              label={"Email"}
              placeholder={"Insira seu email"}
              aoAlterado={(conteudo) => setEmail(conteudo)}
              value={email}
            />
            <Input
              label={"Telefone"}
              placeholder={"Insira seu telefone"}
              aoAlterado={(conteudo) => setTelefone(conteudo)}
              value={telefone}
            />
          </div>
        </div>
        <Botao value={"Cadastrar"} onClick={() => iniciarCadastro()} />
      </div>
    </Tela>
  );
}
