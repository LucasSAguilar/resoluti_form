import styles from "./inputs.module.css";

export default function Inputs({
  label,
  placeholder,
  value,
  type = "text",
  estilosInput,
  estilosContainer,
  aoAlterado,
}) {
  return (
    <div className={`${styles.containerInput} ${estilosContainer}`}>
      <label className={styles.label}>{label}</label>
      <input
        onChange={(e) => aoAlterado(e.target.value)}
        type={type}
        className={`${styles.input} ${estilosInput}`}
        placeholder={placeholder}
        value={value}
      />
    </div>
  );
}
