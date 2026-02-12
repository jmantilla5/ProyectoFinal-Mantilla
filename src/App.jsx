import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import ItemCount from "./components/ItemCount.jsx";
import ItemListContainer from "./components/ItemListContainer.jsx";
// import de componentes
// import BotonMultiuso from "./examples/BotonMultiuso.jsx";
import Navbar from "./components/Navbar.jsx";
import NavBarBS from "./components/NavBarBS.jsx";
import ItemDetailContainer from "./components/ItemDetailContainer";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Error from "./components/Error.jsx";

function App() {
  //const saludar = () => {
  //  alert("Hola");
  //};
  //const despedir = () => {
  //  console.log("Chao");
  //};
  console.log("App");
  return (
    <BrowserRouter>
      {/*<Navbar />*/}
      <NavBarBS />
      <Routes>
        <Route
          path="/"
          element={
            <ItemListContainer mensaje="¡Bienvenidos a su próximo destino!" />
          }
        />
        <Route
          path="/category/:type"
          element={<ItemListContainer mensaje="Estas en la categoría " />}
        />
        <Route path="/item/:id" element={<ItemDetailContainer />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
