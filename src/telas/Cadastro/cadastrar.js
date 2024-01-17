import axios from "axios";

const realizarCadastro = async (
  imagem,
  username,
  password,
  email,
  telefone
) => {
  try {
    const formData = new FormData();
    formData.append("imagem", imagem);
    formData.append("username", username);
    formData.append("password", password);
    formData.append("email", email);
    formData.append("telefone", telefone);

    const response = await axios.post(
      "http://localhost:3001/registrarFuncionarios",
      formData
    );
    return response;
  } catch (error) {
    console.error("Erro ao cadastrar:", error);
    return error;
  }
};

export default realizarCadastro;
