import styles from "../../styles/Register.module.css";
import NomeSocialInput from "../inputs/NomeSocialInput";

function NomeSocialField(){
    return(
      <div>
        <label className={styles.textNomeSocial}>Nome Social</label>
        <NomeSocialInput/>
      </div>
    );
}

export default NomeSocialField;