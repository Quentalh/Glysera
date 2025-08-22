import styles from "./Login.module.css"

function PasswordInput(){
    return (
    <input className={styles.formSenha} type='Password' placeholder='Digite sua senha'/>
    )

}
export default PasswordInput;