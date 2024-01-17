import Inputs from "componentes/Inputs";
import styles from "./FormEnderecos.module.css";

export default function FormEndereco({
  estilosForm,
  tamanhoInputs,
  setEndereco,
  endereco,
  form,
}) {
  const alterarValor = (field, valor) => {
    const novoValor = { ...endereco, [field]: valor };
    const novosValores = form.map((e) =>
      e.id === endereco.id ? novoValor : e
    );

    setEndereco(novosValores);
  };

  return (
    <div className={estilosForm}>
      <Inputs
        estilosContainer={tamanhoInputs}
        label={"Logradouro"}
        placeholder={"Insira o logradouro"}
        value={endereco.logradouro}
        aoAlterado={(value) => {
          alterarValor("logradouro", value);
        }}
      />
      <Inputs
        estilosContainer={tamanhoInputs}
        label={"Número"}
        placeholder={"Insira o número"}
        value={endereco.numero}
        aoAlterado={(value) => {
          alterarValor("numero", value);
        }}
      />
      <Inputs
        estilosContainer={tamanhoInputs}
        label={"CEP"}
        placeholder={"Insira o CEP"}
        value={endereco.cep}
        aoAlterado={(value) => {
          alterarValor("cep", value);
        }}
      />
      <Inputs
        estilosContainer={tamanhoInputs}
        label={"Complemento"}
        placeholder={"Insira o compelemento"}
        value={endereco.complemento}
        aoAlterado={(value) => {
          alterarValor("complemento", value);
        }}
      />
      <Inputs
        estilosContainer={tamanhoInputs}
        label={"Cidade"}
        placeholder={"Insira a cidade"}
        value={endereco.cidade}
        aoAlterado={(value) => {
          alterarValor("cidade", value);
        }}
      />
      <div className={styles.containerSelect}>
        <label className={styles.labelSelect}>Escolha seu estado</label>
        <select
          className={styles.inputSelect}
          onChange={(event) => alterarValor("estado", event.target.value)}
          value={endereco.estado}
        >
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
