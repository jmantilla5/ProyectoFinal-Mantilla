import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import ItemCount from "./components/ItemCount.jsx";
import ItemListContainer from "./components/ItemListContainer.jsx";
// import de componentes
// import BotonMultiuso from "./examples/BotonMultiuso.jsx";
import Navbar from "./components/NavBar.jsx";
import NavBarBS from "./components/NavBarBS.jsx";
import ItemDetailContainer from "./components/ItemDetailContainer";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Error from "./components/Error.jsx";
//Importamos el proveedor del contexto para que sus hijos puedan acceder a la información del carrito (3)
import { CartContext, CartProvider } from "./context/CartContext.jsx";
import CartContainer from "./components/CartContainer.jsx";
import Checkout from "./components/Checkout.jsx";
import CheckoutRHF from "./components/CheckoutRHF.jsx";

function App() {
  return (
    <BrowserRouter>
      <CartProvider>
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
          <Route path="/cart" element={<CartContainer />} />
          <Route path="/checkout" element={<CheckoutRHF />} />
          <Route path="*" element={<Error />} />
        </Routes>
      </CartProvider>
    </BrowserRouter>
  );
}

export default App;
