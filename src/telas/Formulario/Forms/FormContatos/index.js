import Inputs from "componentes/Inputs";

export default function FormContatos({ estiloForm, tamanhoInputs }) {
  return (
    <div className={estiloForm}>
      <Inputs
        estilosContainer={tamanhoInputs}
        label={"Nome"}
        placeholder={"Insira o nome"}
      />
      <Inputs
        estilosContainer={tamanhoInputs}
        label={"Contato"}
        placeholder={"Insira o contato"}
      />
      <Inputs
        estilosContainer={tamanhoInputs}
        label={"Tipo de contato"}
        placeholder={"Insira o tipo de contato"}
      />
    </div>
  );
}
