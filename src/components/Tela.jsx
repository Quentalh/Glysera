import { useState } from "react";
    function Tela (){
        const [modoNorturno, setModoNoturno] = useState(false)
       
        return (
            <div className= {modoNorturno ? 'dark': 'light'}>
            <h1>Título</h1>
            <p> Contéudo</p>
            <button onClick={() => setModoNoturno(!modoNorturno)}>Alternar Modo </button>

            </div>
        )
    }
    export default Tela