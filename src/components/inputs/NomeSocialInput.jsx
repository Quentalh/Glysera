import styles from "../../styles/Register.modules.css";


function NomeSocial() {
  return (
      <input  
      className={styles.cardNomeSocial} 
      type="text" 
      placeholder="Digite seu nome social"/>
  );
}

export default NomeSocial;