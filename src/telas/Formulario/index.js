import Tela from "componentes/Tela";
import styles from "./Formulario.module.css";
import Inputs from "componentes/Inputs";
import BlocoForm from "componentes/BlocoForm";
import Botao from "componentes/Botao";
import Logo from "img/logoResoluti.webp";

export default function Cadastro() {
  return (
    <Tela>
      <img className={styles.logo} src={Logo} />
      <div className={styles.container}>
        <h1 className={styles.titulo}>Cadastrar pessoa física</h1>
        <BlocoForm titulo={"Dados pessoais"}>
          <div className={styles.form}>
            <Inputs label={"Nome"} placeholder={"Insira o nome"} />
            <Inputs label={"Sobrenome"} placeholder={"Insira o sobrenome"} />
            <Inputs
              type="date"
              label={"Data de nascimento"}
              placeholder={"00/00/0000"}
            />
            <Inputs label={"Email"} placeholder={"Insira o email"} />
            <Inputs label={"CPF"} placeholder={"Insira o CPF"} />
            <Inputs label={"RG"} placeholder={"Insira o RG"} />
          </div>
        </BlocoForm>

        <BlocoForm hasButtons={true} titulo={"Endereços"}>
          <div className={styles.form}>
            <Inputs label={"Logradouro"} placeholder={"Insira o logradouro"} />
            <Inputs label={"Número"} placeholder={"Insira o número"} />
            <Inputs label={"CEP"} placeholder={"Insira o CEP"} />
            <Inputs
              label={"Complemento"}
              placeholder={"Insira o compelemento"}
            />
            <Inputs label={"Cidade"} placeholder={"Insira a cidade"} />

            <div className={styles.containerSelect}>
              <label className={styles.labelSelect}>Escolha seu estado</label>
              <select className={styles.inputSelect}>
                <option value="ac">Acre</option>
                <option value="al">Alagoas</option>
                <option value="ap">Amapá</option>
                <option value="am">Amazonas</option>
                <option value="ba">Bahia</option>
                <option value="ce">Ceará</option>
                <option value="df">Distrito Federal</option>
                <option value="es">Espírito Santo</option>
                <option value="go">Goiás</option>
                <option value="ma">Maranhão</option>
                <option value="mt">Mato Grosso</option>
                <option value="ms">Mato Grosso do Sul</option>
                <option value="mg">Minas Gerais</option>
                <option value="pa">Pará</option>
                <option value="pb">Paraíba</option>
                <option value="pr">Paraná</option>
                <option value="pe">Pernambuco</option>
                <option value="pi">Piauí</option>
                <option value="rj">Rio de Janeiro</option>
                <option value="rn">Rio Grande do Norte</option>
                <option value="rs">Rio Grande do Sul</option>
                <option value="ro">Rondônia</option>
                <option value="rr">Roraima</option>
                <option value="sc">Santa Catarina</option>
                <option value="sp">São Paulo</option>
                <option value="se">Sergipe</option>
                <option value="to">Tocantins</option>
              </select>
            </div>
          </div>
        </BlocoForm>

        <BlocoForm titulo={"Contatos"} hasButtons={true}>
          <div className={styles.form}>
            <Inputs label={"Nome"} placeholder={"Insira o nome"} />
            <Inputs label={"Contato"} placeholder={"Insira o contato"} />
            <Inputs
              label={"Tipo de contato"}
              placeholder={"Insira o tipo de contato"}
            />
          </div>
        </BlocoForm>

        <div className={styles.centralizarBotao}>
          <Botao
            estiloSecundario={styles.botaoFinalizar}
            value={"Finalizar e enviar"}
          />
        </div>
      </div>
    </Tela>
  );
}
