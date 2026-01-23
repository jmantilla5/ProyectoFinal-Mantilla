import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import ItemCount from "./components/ItemCount.jsx";
import ItemListContainer from "./components/ItemListContainer.jsx";
// import de componentes
// import BotonMultiuso from "./examples/BotonMultiuso.jsx";
import Navbar from "./components/Navbar.jsx";
import NavBarBS from "./components/NavBarBS.jsx";

function App() {
  //const saludar = () => {
  //  alert("Hola");
  //};
  //const despedir = () => {
  //  console.log("Chao");
  //};
  console.log("App");
  return (
    <>
      {/*<Navbar />*/}
      <NavBarBS />
      <ItemListContainer mensaje="¡Bienvenidos a su próximo destino!" />
      {/*<ItemCount />*/}
      {/*<BotonMultiuso texto="Hola" color="red" onClickFunction={saludar} />
      <BotonMultiuso texto="Chao" color="green" onClickFunction={despedir} />*/}
    </>
  );
}

export default App;
