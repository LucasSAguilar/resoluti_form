import styles from "./Tela.module.css"

export default function Tela ({children}){
    return (
        <div className={styles.tela}>
            <div className={styles.efeito}>
            {children}
            </div>
        </div>
    )
}