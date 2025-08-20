
import './App.css'
import Contador from './components/Contador.jsx';
import LoginForm from "./components/LoginForm.jsx"
import Tela from "./components/Tela.jsx"
import FormularioContato from './components/FormularioContato.jsx';
import FiltroProdutos from './components/FiltroProdutos.jsx';
import Carrinho from './components/Carrinho.jsx';
 function App(){
  return (
    <div>
     <LoginForm />
     <Contador/>
     <FormularioContato />
     <FiltroProdutos/>
     <Carrinho/>
    </div>
  )
 }


 export default App;
 
