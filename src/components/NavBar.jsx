//import css
import "../assets/css/NavBar.css";

//imagenes
// SRC
import logoReact from "../assets/react.svg";
import CartWidget from "./CartWidget";

const NavBar = () => {
  console.log("NavBar");
  return (
    <nav className="nav-container">
      <a className="anchor-nav" href="">
        {/*<img src={logoReact} alt="Logo React" />*/}
        {/*Imagen Public*/}
        <img src={"../vite.svg"} alt="Logo vite" />
      </a>
      <a className="anchor-nav" href="">
        Nuevos
      </a>
      <a className="anchor-nav" href="">
        Ofertas
      </a>
      <a className="anchor-nav" href="">
        Mas Vendidos
      </a>
      <CartWidget />
    </nav>
  );
};
export default NavBar;
