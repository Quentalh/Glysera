import { useState } from "react";
function  ItemFAQ() {
    const [estaAberto, setEstaAberto] = useState(false);

    return (
        <div>
            <h3 onClick={() => setEstaAberto(!estaAberto)} style={{cursor: 'pointer'}}> Qual é a capital do Brasil?</h3>
            {estaAberto && <p>A capital do Brasil é Brasilia.</p>}
        </div>
    );
}
export default ItemFAQ