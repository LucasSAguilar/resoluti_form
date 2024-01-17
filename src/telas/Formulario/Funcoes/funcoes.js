const organizarID = (set) => {
  set((prevForm) => {
    const novoArray = prevForm.map((item, index) => ({
      ...item,
      id: index + 1,
    }));

    return novoArray;
  });
};

const addNovoEndereco = (set) => {
  set((prevEnderecos) => [
    ...prevEnderecos,
    {
      id: prevEnderecos.length + 1,
      logradouro: "",
      numero: "",
      cep: "",
      complemento: "",
      cidade: "",
      estado: "",
    },
  ]);
  organizarID(set)
};

const addNovoContato = (set) => {
  set((prevContato) => [
    ...prevContato,
    {
      id: prevContato + 1,
      nome: "",
      contato: "",
      tipoContato: "",
    },
  ]);

  organizarID(set)
};

const excluirForm = (id, set, form) => {
  const novoArray = form.filter((item) => item.id !== id);
  set(novoArray);
};

const converterData = (data) => {
  const partes = data.split("/");
  const novaData = `${partes[2]}-${partes[1]}-${partes[0]}`;
  return novaData;
};

module.exports = { organizarID, addNovoContato, addNovoEndereco, excluirForm, converterData };
