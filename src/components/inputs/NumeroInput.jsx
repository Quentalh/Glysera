import styles from "../../styles/Register.module.css";

function NumeroInput (){
    return(
      <input 
      className={styles.cardNumero} 
      type="text" 
      placeholder="Digite seu numero de residencia"/>
    );
}

export default NumeroInput;