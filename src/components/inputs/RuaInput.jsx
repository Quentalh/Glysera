import styles from "../../styles/Register.module.css";

function RuaInput(){
    return(
      <input 
      className={styles.cardRua} 
      type="text" 
      placeholder="Digite o nome da rua"/>
    );
}

export default RuaInput;