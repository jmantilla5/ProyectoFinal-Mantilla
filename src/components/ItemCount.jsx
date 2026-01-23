import { useState } from "react";

const ItemCount = () => {
  //const [variableDeEstado, funcionModificadora] = useState(valorInicial);
  //REGLAS: SIEMPRE DENTRO DE COMPONENTES // SE DECLARAN EN EL NIVEL SUPERIOR // NO SE DECLARAN CONDICIONALMENTE // VALORES INICIALES PUEDEN SER STRING, OBJECT, BOOLEAN, ARRAY
  // NO INICIALES CON UNA FUNCION
  const [count, setCount] = useState(1);
  console.log("Contador");
  const sumar = () => {
    setCount(count + 1);
  };
  const restar = () => {
    if (count > 0) {
      setCount(count - 1);
    }
  };
  return (
    <div>
      <button onClick={restar} className="btn btn-danger">
        -
      </button>

      <span className="btn">{count}</span>

      <button onClick={sumar} className="btn btn-success">
        +
      </button>
    </div>
  );
};

export default ItemCount;
