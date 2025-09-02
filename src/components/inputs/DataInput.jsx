import styles from "../../styles/Register.module.css";

function DataInput(){
  return(
    <input 
    className={styles.cardData} 
    type="date" 
    placeholder="Digite sua data nascimento"
    />
  );
}

export default DataInput;