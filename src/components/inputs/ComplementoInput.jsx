import styles from "../../styles/Register.module.css";

function ComplementoInput (){
  return(
    <input 
    classNome={styles.cardComplemento} 
    type="text" 
    placeholder="Digite o complemento do endereço"/>
  );
}

export default ComplementoInput;