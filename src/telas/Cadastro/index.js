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
  const [previewImagem, setPreviewImagem] = useState(null);
  const [alerta, setAlerta] = useState("");

  const mudarImagem = (event) => {
    const file = event.target.files[0];
    setImagem(file);

    const reader = new FileReader();
    reader.onloadend = () => {
      setPreviewImagem(reader.result);
    };

    if (file) {
      reader.readAsDataURL(file);
    }
  };

  const iniciarCadastro = async () => {
    const response = await realizarCadastro(
      imagem,
      username,
      password,
      email,
      telefone
    );

    if (response.status === 200) {
      setUsername("");
      setPassword("");
      setEmail("");
      setImagem(null);
      setTelefone("");
      setPreviewImagem(null);
      setAlerta("");
    } else {
      setAlerta(`Ocorreu um erro: ${response}`);
    }
  };

  return (
    <Tela>
      <img className={styles.logo} src={Logo} />
      <div className={styles.containerLogin}>
        <div className={styles.conteudo}>
          <div className={styles.containerInputImagem}>
            <label htmlFor="inputImagem" className={styles.labelImagem}>
              {previewImagem ? (
                <img
                  src={previewImagem}
                  alt="Preview da imagem"
                  className={styles.previewImagem}
                />
              ) : (
                <p>Insira sua imagem </p>
              )}
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
        <p className={styles.alerta}>{alerta}</p>
        <Botao value={"Cadastrar"} onClick={() => iniciarCadastro()} />
      </div>
    </Tela>
  );
}
