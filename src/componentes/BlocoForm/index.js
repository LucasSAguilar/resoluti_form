import styles from "./BlocoForm.module.css";
import Botao from "componentes/Botao";

export default function BlocoForm({ children, titulo, hasButtons = false }) {
  return (
    <div className={styles.bloco_do_form}>
      <h3 className={styles.subtitulo}>{titulo}</h3>
      <div className={styles.form}>{children}</div>

      {hasButtons ? (
        <div className={styles.containerBotoes}>
          <Botao value={"Adicionar"} estiloSecundario={styles.bttAdd}>
            Adicionar
          </Botao>
          <Botao value={"Excluir"} estiloSecundario={styles.bttExcluir}>
            Excluir
          </Botao>
        </div>
      ) : (
        ""
      )}

      <div className={styles.separador} />
    </div>
  );
}
