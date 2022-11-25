import './App.css';
import Navbar from './Navbar/Navbar';
import Form from './Form/Form';
import ItemListContainer from './ItemListContainer/ItemListContainer';
const App = () => {
  
  return (
    <>
      <Navbar/>
      <Form busqueda={"Buscar productos"}/>
      <ItemListContainer greeting={"Hola, bienvenido"}/>
    </>
  );
}

export default App;
