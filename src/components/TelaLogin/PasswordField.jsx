import PasswordInput from "./PasswordInput.jsx";
import styles from "./Login.module.css";

function Password(){

    return (
        <div className={styles.fieldSenha}>
            <label>SENHA &nbsp;</label>
            <PasswordInput />
        </div>
    );
}
export default Password;