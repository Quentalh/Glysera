import { useState } from "react";

function Carrinho() {
    const[itens, setItens] = useState([]);
function adicionarItem() {
    setItens(itens +  { id: Date.now(), nome: 'Produto'}); //Cria uam novo  array

}
return (
    <div>
        <h2>Carrinho itens {itens.length} - {itens} </h2>
        <button onClick={adicionarItem}>Adicionar Item</button>
    </div>
);

}
export default Carrinho