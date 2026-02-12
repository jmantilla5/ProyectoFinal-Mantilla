import { useState, useEffect } from "react";

const ItemCount = () => {
  //const [variableDeEstado, funcionModificadora] = useState(valorInicial);
  //REGLAS: SIEMPRE DENTRO DE COMPONENTES // SE DECLARAN EN EL NIVEL SUPERIOR // NO SE DECLARAN CONDICIONALMENTE // VALORES INICIALES PUEDEN SER STRING, OBJECT, BOOLEAN, ARRAY
  // NO INICIALES CON UNA FUNCION
  const [count, setCount] = useState(1);
  const [compra, setCompra] = useState(false);
  console.log("Contador");
  const sumar = () => {
    setCount(count + 1);
  };
  const restar = () => {
    if (count > 0) {
      setCount(count - 1);
    }
  };

  const comprar = () => {
    setCompra(!compra);
  };

  //useEffect(() => {}, []);

  //sin el array de dependencias // casi nunca se usa
  useEffect(() => {
    console.log("EL CODIGO SE EJECUTA SIEMPRE");
  });

  //CUANDO SE EJECUTA UNA SOLA VEZ, CON EL ARRAY DE DEPENDENCIAS VACIO
  useEffect(() => {
    console.log(
      "EL CODIGO SE EJECUTA UNA SOLA VEZ, CUANDO SE MONTA EL COMPONENTE",
    );
  }, []);

  //CUANDO SE EJECUTA UNA VEZ Y ESTA A LA ESCUCHA DE UN CAMBIO (SE VUELVE A EJECUTAR) // SE USA MUCHO
  useEffect(() => {
    console.log(
      "EL CODIGO SE EJECUTA CUANDO MONTA EL COMPONENTE Y SIEMRE QUE CAMBIE LO QUE ESCUCHA",
      compra,
    );
  }, [compra]);

  return (
    <div>
      <button onClick={restar} className="btn btn-danger">
        -
      </button>

      <span className="btn">{count}</span>

      <button onClick={sumar} className="btn btn-success">
        +
      </button>
      <button onClick={comprar} className="btn btn-primary d-block mt-2">
        Comprar
      </button>
    </div>
  );
};

export default ItemCount;
