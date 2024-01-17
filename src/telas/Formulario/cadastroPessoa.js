import axios from "axios";

const URL = "http://localhost:3001/registrarPessoa";

const realizarCadastro = async (dadosPessoais, enderecos, contatos) => {
  try {
    const response = await axios.post(URL, {
      dadosPessoais,
      enderecos,
      contatos,
    });
    return response.data;
  } catch (error) {
    console.error("Erro ao cadastrar:", error);
    return error;
  }
};

export { realizarCadastro };
