import styles from "../../styles/Register.modules.css";

function NomeInput(){
  return(
      <input 
      className={styles.cardNome} 
      type="text" 
      placeholder="Digite seu Nome"
      />
  );

}

export default NomeInput;