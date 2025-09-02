import styles from "../../styles/Register.module.css";

function CepInput (){
    return (
        <input 
        className={styles.cardCep} 
        type="text" 
        placeholder="Digite seu Cep"/>
    );
}

export default CepInput;