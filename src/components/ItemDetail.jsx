import React, { useState } from "react";
import ItemCount from "./ItemCount";
//Importamos cotexto que quiero usar y el hook para usar el contexto (4)
import { useContext } from "react";
import { CartContext } from "../context/CartContext";
import { Link, Links } from "react-router-dom";
import Swal from "sweetalert2";

const ItemDetail = ({ detalle }) => {
  const [purchase, setPurchase] = useState(false);
  const { cart, addItem, itemQuantity } = useContext(CartContext);

  const onAdd = (cantidad) => {
    addItem(detalle, cantidad);
    setPurchase(true);
    Swal.fire({
      position: "top-end",
      icon: "success",
      title: `Agregaste ${detalle.name} al carrito`,
      showCancelButton: false,
      showConfirmButton: false,
      timer: 1000,
    });
  };

  const stockActualizado = detalle.stock - itemQuantity(detalle.id);

  return (
    <div>
      <h1>Detalle de {detalle.name}</h1>
      <img src={detalle.img} alt={detalle.name} />
      <p>{detalle.description}</p>
      <p>${detalle.price},00</p>
      <p>Stock disponible: {stockActualizado} unidades</p>
      {purchase ? (
        <Link className="btn btn-dark" to="/cart">
          Ir al carrito
        </Link>
      ) : (
        <ItemCount onAdd={onAdd} stock={stockActualizado} />
      )}
    </div>
  );
};

export default ItemDetail;
