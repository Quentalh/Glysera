import { useState } from "react";

function FiltroProdutos(){
    const [termoBusca, setTermoBusca] = useState ('')
    return(
        <div>
            <label>Procurar Produto:</label>
            <input type="text" value={termoBusca} onChange={(e)=> setTermoBusca(e.target.value)} placeholder=" "/>
            <p>A procura por: <strong>{termoBusca}</strong></p>

        </div>
    )

}
export default FiltroProdutos