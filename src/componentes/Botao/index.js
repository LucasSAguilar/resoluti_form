import styles from "./Botao.module.css";
export default function Cadastro({value, onClick, estiloSecundario}) {
  return (
    <button className={`${styles.botao} ${estiloSecundario}`} onClick={onClick}>{value}</button>
    );
}