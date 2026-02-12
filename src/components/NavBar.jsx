//import css
import "../assets/css/NavBar.css";

//imagenes
// SRC
import logoReact from "../assets/react.svg";
import CartWidget from "./CartWidget";
import { NavLink } from "react-router-dom";

const NavBar = () => {
  console.log("NavBar");
  return (
    <nav className="nav-container">
      <NavLink className="anchor-nav" to="/">
        {/*<img src={logoReact} alt="Logo React" />*/}
        {/*Imagen Public*/}
        <img src={"../vite.svg"} alt="Logo vite" />
      </NavLink>
      <NavLink className="anchor-nav" to="/category/nuevos">
        Nuevos
      </NavLink>
      <NavLink className="anchor-nav" to="/category/ofertas">
        Ofertas
      </NavLink>
      <NavLink className="anchor-nav" to="/category/masvendidos">
        Mas Vendidos
      </NavLink>
      <CartWidget />
    </nav>
  );
};
export default NavBar;
