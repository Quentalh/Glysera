import styles from "../../styles/Register.module.css";
import DataInput from "../inputs/DataInput";

function DataField(){
    return(
      <div>
        <label className={styles.textData}>Data</label>
        <DataInput/>
      </div>
    );
}

export default DataField;