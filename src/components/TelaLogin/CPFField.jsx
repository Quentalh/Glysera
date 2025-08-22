import CPFInput from "./CPFInput";
import styles from "./Login.module.css"

function CPFField(){
    
    return (
        <div className={styles.fieldCPF}>
            <label>CPF &nbsp;</label>
            <CPFInput/>
        </div>
    );
}
export default CPFField