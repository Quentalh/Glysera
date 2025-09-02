import styles from "../../styles/Register.module.css";
import RuaInput from "../inputs/RuaInput"

function RuaField(){
    return(
      <div>
        <label className={styles.textRua}>Rua</label>
        <RuaInput/>
      </div>
    );
}

export default RuaField;