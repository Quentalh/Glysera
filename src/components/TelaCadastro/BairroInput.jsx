import styles from "./Cadastro.module.css"

function BairroInput(){
    
    return( 
    <input className={styles.formBairro} type='text' placeholder='Digite seu Bairro'/>
    )
}
export default BairroInput;