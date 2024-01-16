import styles from "./Home.module.css"
// -----------------
import Tela from "componentes/Tela";
import Logo from "img/logoResoluti.webp"
import { Link } from "react-router-dom";

export default function Cadastro() {
  return (
  <Tela>
    <img className={styles.logo} src={Logo}/>
    <div className={styles.separador}></div>
    <div className={styles.containerBotoes}>
      <Link className={styles.bttLinkLogin} to={"/login"}>Login</Link>
      <Link className={styles.bttLinkCadastro} to={"/cadastro"}>Cadastro</Link>
    </div>
  </Tela>
  )
}
