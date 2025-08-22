import LoginForm from "./components/TelaLogin/LoginForm";
import Consulta from "./components/TelaConsulta/Consulta"; // Import Consulta component
import './Global.css';
import { Routes, Route } from 'react-router-dom';

function Global() {
  return (
    <Routes>
      {/* Define the route for the LoginForm */}
      <Route path="/" element={<LoginForm />} />
      {/* Define the route for the Consulta */}
      <Route path="/consulta" element={<Consulta />} />
    </Routes>
  );
}

export default Global;