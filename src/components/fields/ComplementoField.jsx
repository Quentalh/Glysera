import styles from "../../styles/Register.module.css";
import ComplementoInput from "../inputs/ComplementoInput";

function ComplementoField (){
    return(
      <div>
        <label className={styles.textComplemento}>Complemento</label>
        <ComplementoInput/>
      </div>
    );
}

export default ComplementoField;