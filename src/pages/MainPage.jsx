import styles from "../styles/Main.module.css";
import Menu from "../components/items/Menu";

function MainPage(){
  return(
    <div className={styles.container}>
      <header></header>
      <Menu/>
        <main>
          <h1 className={styles.title} >Conteúdo da Página</h1>
          <p className={styles.pragraph}>Este é o conteúdo principal do sistema.</p>
        </main>
        <footer>
          <p className={styles.pragraph}>Todos os direitos reservados.</p>
        </footer>
    </div>
  );

}

export default MainPage;