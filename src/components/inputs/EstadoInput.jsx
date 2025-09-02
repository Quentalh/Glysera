import styles from "../../styles/Register.module.css";

function EstadoInput(){
    return(
      <input 
      className={styles.cardEstado} 
      type="text" 
      placeholder="Digite sua Estado"/>
    );
}

export default EstadoInput;