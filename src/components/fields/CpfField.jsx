import styles from "../../styles/Register.module.css";
import CpfInput from "../inputs/CpfInput";

function CpfField(){
    
    return (
        <div className={styles.textCPF}>
            <label>CPF &nbsp;</label>
            <CpfInput/>
        </div>
    );
}
export default CpfField;