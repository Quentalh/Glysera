import styles from "./Login.module.css"

function CPFInput(){
    
    return( 
    <input className={styles.formCPF} type='text' placeholder='Digite seu CPF'/>
    )
}
export default CPFInput;