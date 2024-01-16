import Inputs from "componentes/Inputs";
import styles from "./FormEnderecos.module.css";

export default function FormEndereco({ estilosForm, tamanhoInputs }) {
  return (
    <div className={estilosForm}>
      <Inputs
        estilosContainer={tamanhoInputs}
        label={"Logradouro"}
        placeholder={"Insira o logradouro"}
      />
      <Inputs
        estilosContainer={tamanhoInputs}
        label={"Número"}
        placeholder={"Insira o número"}
      />
      <Inputs
        estilosContainer={tamanhoInputs}
        label={"CEP"}
        placeholder={"Insira o CEP"}
      />
      <Inputs
        estilosContainer={tamanhoInputs}
        label={"Complemento"}
        placeholder={"Insira o compelemento"}
      />
      <Inputs
        estilosContainer={tamanhoInputs}
        label={"Cidade"}
        placeholder={"Insira a cidade"}
      />
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
  );
}
