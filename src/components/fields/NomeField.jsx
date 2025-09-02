import styles from "../../styles/Register.module.css";
import NomeInput from "../inputs/NomeInput";

function NomeField(){
   return(
    <div className={styles.textNome}>
      <label>Nome &nbsp;</label>
      <NomeInput/>
    </div>
   );
}

export default NomeField;