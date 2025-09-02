import styles from "../../styles/Register.module.css";
import NeighborhoodInput from "../inputs/NeighborhoodInput";

function NeighborhoodField(){
  return(
    <div>
      <label className={styles.textNeighborhood}>Bairro</label>
      <NeighborhoodInput/>
    </div>
  );

}

export default NeighborhoodField;