import styles from "../../styles/Register.module.css";

function CidadeInput(){
  return (
    <input 
    className={styles.cardCidade} 
    type="text" 
    placeholder="Digite sua cidade"/>
  );
}

export default CidadeInput;