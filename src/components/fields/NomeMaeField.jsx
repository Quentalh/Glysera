import styles from "../../styles/Register.module.css";
import NomeMaeInput from "../inputs/NomeMaeInput"

function NomeMae(){
    return(
      <div>
        <label className={styles.textNomeMae}>Nome da Mãe</label>
        <NomeMaeInput/>
      </div>
    );
}

export default NomeMae;