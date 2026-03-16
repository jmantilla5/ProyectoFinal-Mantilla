import React, { useContext } from "react";
import { CartContext } from "../context/CartContext";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";

const CartView = () => {
  const { cart, clear, removeItem, total } = useContext(CartContext);

  const preConfirm = () => {
    Swal.fire({
      title: "¿Estas seguro de borrar todo el carrito?",
      icon: "question",
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      cancelButtonText: "No",
      confirmButtonText: "Si",
      showCancelButton: true,
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire({
          title: "Borrado!",
          text: "Tu carrito esta vacio",
          icon: "success",
        });
        clear();
      }
    });
  };

  return (
    <div>
      <h1>Tu Carrito 🛒 </h1>

      {cart.map((compra) => (
        <div
          key={compra.id}
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            width: "100%",
            padding: "2rem",
          }}
        >
          <h2>{compra.name}</h2>
          <img src={compra.img} alt={compra.name} style={{ width: "10rem" }} />
          <span>{compra.name}</span>
          <span>${compra.price},00</span>
          <span>cantidad: {compra.quantity}</span>
          <span>total: ${compra.price * compra.quantity},00</span>
          <button
            className="btn btn-dark"
            onClick={() => removeItem(compra.id)}
          >
            Eliminar
          </button>
        </div>
      ))}
      <span>Total a pagar: ${total()},00</span>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          width: "80%",
          padding: "2rem",
        }}
      >
        <button className="btn btn-danger" onClick={preConfirm}>
          Vaciar carrito
        </button>
        <Link to="/checkout" className="btn btn-success">
          Finalizar compra
        </Link>
      </div>
    </div>
  );
};

export default CartView;
