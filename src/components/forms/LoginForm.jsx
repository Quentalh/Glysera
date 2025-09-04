import UserField from "../fields/UserField";
import AcessField from "../fields/AcessField";
import styles from "../../styles/Login.module.css";

function LoginForm() {
    return (
        <div className={styles.LoginForm}>
            <UserField />
            <AcessField />
        </div>
    );
}

export default LoginForm;