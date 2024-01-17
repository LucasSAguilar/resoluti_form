// logar.js
import axios from "axios";

const logar = async (username, senha) => {
  try {
    const URL = `http://localhost:3001/realizarLogin?username=${username}&senha=${senha}`;
    const response = await axios.get(URL);
    console.log("Dados recebidos:", response.data);
    return response.data.aprovado; 
  } catch (error) {
    console.error("Erro na requisição:", error);
    return false; 
  }
};

export default logar;
