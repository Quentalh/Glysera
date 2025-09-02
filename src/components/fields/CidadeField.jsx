import styles from "../../styles/Register.module.css";
import CidadeInput from "../inputs/CidadeInput";

function CidadeField(){
  return(
    <div>
    <label className={styles.textCidade}>Cidade</label>
    <CidadeInput/>
    </div>
  );
}

export default CidadeField;