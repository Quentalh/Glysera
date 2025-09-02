import styles from "../../styles/Register.modules.css";

function NomeMae (){
  return (
    <input  
    className={styles.cardNomeMae} 
    type="text" 
    placeholder="Digite o nome da sua mãe"/>
  );
}

export default NomeMae;