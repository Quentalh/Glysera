import './Consulta.css'
import { Routes, Route, Link } from 'react-router-dom';
import { useState } from 'react';
function Consulta() {
    const [nome ,setNome] = useState('');
    const [nmr,setNmr] = useState('');
    const[nascimento,setNascimento] = useState('');
    return(
        <div className="Consulta">
            <nav>
                <ul>
                    <li>INICIO</li>
                    <li>AUTENTICACAO</li>
                    <li>CADASTROS</li>
                    <li>GERENCIAMENTO</li>
                    <li>CONSULTAS</li>
                </ul>
            </nav>
            <h1>INFORMAÇÕES DO PACIENTE</h1>
            <h2>CONSULTAR CADASTRO</h2>
            <div className="nome-p">
                <label htmlFor="nome-paciente">Nome do Paciente:</label>
                <input type="text" id="nome-paciente" value={nome} onChange={(e) => setNome(e.target.value)}  />
            </div>
            <div className="numero-sus">
                <label htmlFor="numero-do-sus">Número do SUS:</label>
                <input type="text" id="numero-do-sus" value={nmr} onChange={(e) => setNmr(e.target.value)} />
            </div>
            <div className="data-nascimento">
                <label htmlFor="data-nascimento">Data de Nascimento:</label>
                <input type="date" id="data-nascimento" value={nascimento} onChange={(e) => setNascimento(e.target.value)} />
            </div>
            <div className="botao-pesquisa">
                <button>Pesquisar</button>
            </div>
            <div className="box">
                <ul>
                    <li>SUS: {nmr}</li>
                    <li>Nome: {nome}</li>
                    <li>Data de Nascimento: {nascimento}</li>
                </ul>

            </div>
        </div>
    )
}
export default Consulta;