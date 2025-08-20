import { useState } from "react";
    function FomularioContato() {
        const[nome, setNome] = useState('')
        const[mensagem, setMensagem]= useState ('')
    return (
        <div>
            <input value={nome} onChange={(e) => setNome(e.target.value)} placeholder='SeuNome'/>
            <textarea value={mensagem} onChange={(e)=>setMensagem(e.target.value)} placeholder="SuaMensagem"></textarea>
            <hr />
            <p><strong>Pré-visualização:</strong></p>
            <p><strong>Nome:</strong> {nome}</p>
            <p><strong>Mensagem:</strong> {mensagem}</p>
        </div>
    )

    }
export default FomularioContato

