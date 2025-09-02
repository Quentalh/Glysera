import styles from "../../styles/Menu.module.css";
import ItemRegister from "./ItemRegister";
import ItemManage from "./ItemManage";
import ItemQuery from "./ItemQuery";
import ItemLogout from "./ItemLogout";
import ToggleBtn from "./ToggleBtn";
import { Link } from "react-router-dom";


function Menu(){
    return(
      <div id = "container">
        <ToggleBtn/>
      <nav className={styles.sidebar}>
        <ul className={styles.menu}>
           <li>
            <Link to="/RegisterPage" className={styles.link}>
              <ItemRegister/>
           </Link>
           </li>
          <li>
            <Link to="/ManagePage" className={styles.link}>
              <ItemManage/>
            </Link>
          </li>
          <li>
            <Link to="/QueryPage" className={styles.link}>
              <ItemQuery/>
            </Link>
          </li>
          <li className={styles.logout}>
           <Link to="/" className={styles.link}>   
            <ItemLogout/>
           </Link>
          </li>
        </ul>
      </nav>
      </div>
    );
}

export default Menu;