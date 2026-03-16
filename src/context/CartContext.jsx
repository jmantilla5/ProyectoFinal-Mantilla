import { createContext, useEffect, useState } from "react";

// Context para el carrito de compras (1)
export const CartContext = createContext();

const carritoLS = JSON.parse(localStorage.getItem("carrito")) || [];

//Declaro al proveedor (2)
export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState(carritoLS);
  // Las herramientas (funciones)

  useEffect(() => {
    localStorage.setItem("carrito", JSON.stringify(cart));
  }, [cart]);

  //Agrega un producto al carrito - Incluyendo repetidos
  const addItem = (item, qty) => {
    //console.log({ ...item, quantity: qty });
    if (isInCart(item.id)) {
      //console.log("El producto ya esta en el carrito");
      setCart(
        cart.map((prod) => {
          if (prod.id === item.id) {
            //Sumar cantidades
            return { ...prod, quantity: prod.quantity + qty };
          } else {
            //Retorno el producto sin modificar
            return prod;
          }
        }),
      );
    } else {
      //No esta en el carrito
      setCart([...cart, { ...item, quantity: qty }]);
    }
  };

  //Borra todo el carrito
  const clear = () => {
    setCart([]);
  };

  //Elimina un producto del carrito
  const removeItem = (id) => {
    setCart(cart.filter((prod) => prod.id !== id));
  };

  //Devolver un booleano si el producto ya esta en el carrito
  const isInCart = (id) => {
    return cart.some((prod) => prod.id === id);
  };

  //Cantidad total de productos en el carrito
  const cartQty = () => {
    return cart.reduce((acc, prod) => (acc += prod.quantity), 0);
  };

  //Precio total a pagar
  const total = () => {
    return cart.reduce((acc, prod) => (acc += prod.quantity * prod.price), 0);
  };

  //Precio total a pagar con impuestos
  const totalConImp = () => {
    return cart.reduce((acc, prod) => (acc += prod.quantity * prod.price), 0.5);
  };

  //OPCIONAL

  const itemQuantity = (id) => {
    const inCart = cart.find((prod) => prod.id === id);
    if (inCart) {
      return inCart.quantity;
    } else {
      return 0;
    }
  };

  return (
    <CartContext.Provider
      value={{ cart, addItem, clear, removeItem, itemQuantity, total, cartQty }}
    >
      {children}
    </CartContext.Provider>
  );
};
