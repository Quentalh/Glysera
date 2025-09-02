import styles from "../../styles/Register.module.css";
import NumeroInput from "../inputs/NumeroInput";

function NumeroField(){
    return(
      <div>
        <label className={styles.textNumero}>Numero</label>
        <NumeroInput/>
      </div>
    );
}

export default NumeroField;