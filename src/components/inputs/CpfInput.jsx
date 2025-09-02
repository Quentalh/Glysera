import styles from "../../styles/Register.module.css";

function CpfInput(){
    
    return( 
    <input 
    className={styles.cardCPF} 
    type="text" 
    placeholder="Digite seu CPF"/>
    )
}
export default CpfInput;