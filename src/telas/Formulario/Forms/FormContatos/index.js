import Inputs from "componentes/Inputs";
export default function FormContatos({
  estiloForm,
  tamanhoInputs,
  contato,
  form,
  setContatos,
}) {
  const definirValor = (field, valor) => {
    const novoContato = { ...contato, [field]: valor };
    const listaAtualizada = form.map((c) =>
      contato.id === c.id ? novoContato : c
    );

    setContatos(listaAtualizada);
  };

  return (
    <div className={estiloForm}>
      <Inputs
        estilosContainer={tamanhoInputs}
        label={"Nome"}
        placeholder={"Insira o nome"}
        value={contato.nome}
        aoAlterado={(value) => {
          definirValor("nome", value);
        }}
      />
      <Inputs
        estilosContainer={tamanhoInputs}
        label={"Contato"}
        placeholder={"Insira o contato"}
        value={contato.contato}
        aoAlterado={(value) => {
          definirValor("contato", value);
        }}
      />
      <Inputs
        estilosContainer={tamanhoInputs}
        label={"Tipo de contato"}
        placeholder={"Insira o tipo de contato"}
        value={contato.tipoContato}
        aoAlterado={(value) => {
          definirValor("tipoContato", value);
        }}
      />
    </div>
  );
}
