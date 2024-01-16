import { Route, BrowserRouter, Routes } from "react-router-dom";
// -----------
import Cadastro from "telas/Cadastro"
import Login from "telas/Login"
import Home from "telas/Home"
import Formulario from "telas/Formulario"
// -----------

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/cadastrar" element={<Cadastro />} />
        <Route path="/formulario" element={<Formulario />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
