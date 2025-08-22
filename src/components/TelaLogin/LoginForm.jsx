import CPFField from "./CPFField";
import Button from "./Button";
import PasswordField from "./PasswordField";
import Logo from "../../assets/Glysera_LOGO.png";
import styles from "./Login.module.css"

function LoginForm(){
    return(
        <div>
            <img src={Logo} alt="Logo Glysera" className={styles.logo}/>
            <h2 className={styles.titulo}>Painel de Acesso</h2>
            <CPFField/>
            <PasswordField/>
            <Button/>
        </div>
    );

}

export default LoginForm