import styles from "../../styles/Register.module.css";
import CepInput from "../inputs/CepInput";

function CepField (){
    return(
        <div>
            <label className={styles.textCep}>Cep</label>
            <CepInput/>
        </div>
    );
}

export default CepField;