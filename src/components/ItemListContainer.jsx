import { useStat, useEffect, useState } from "react";
import { getProducts, productos } from "../mock/asyncMock";
import ItemList from "./ItemList";
import { useParams } from "react-router-dom";
import Input from "../examples/Input";
import Loader from "./Loader";
import {
  addDoc,
  collection,
  doc,
  getDocs,
  query,
  where,
} from "firebase/firestore";
import { db } from "../service/firebase";
const ItemListContainer = (props) => {
  const { mensaje } = props;
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const { type } = useParams();

  //FIREBASE
  useEffect(() => {
    setLoading(true);
    //CONECTARNOS A NUESTRA COLECCION
    const prodColl = type
      ? query(collection(db, "viajescondestino"), where("category", "==", type))
      : collection(db, "viajescondestino");
    //pedir docs
    getDocs(prodColl)
      .then((res) => {
        //limpiar la data
        const list = res.docs.map((doc) => {
          return {
            id: doc.id,
            ...doc.data(),
          };
        });

        setData(list);
      })
      .catch((error) => console.log(error, "error")) // atrapamos el error
      .finally(() => setLoading(false)); // por ultimo, pase lo que pase, cambio el estado de loading a false
  }, [type]);

  //const subirDataAFirebase = () => {
  //  console.log("SUBIENDO DATA... ");
  //  const prodCollec = collection(db, "viajescondestino");
  //  productos.map((prod) => addDoc(prodCollec, prod));
  //};

  return (
    <>
      {/*   <button onClick={subirDataAFirebase}>SUBIR DATA</button>  */}
      {loading ? (
        <Loader
          text={type ? "Cargando Categoría" : "Cargando todos los productos"}
        />
      ) : (
        <div>
          {/*<Input />*/}
          <h1>
            {mensaje}
            {type && (
              <span style={{ textTransform: "capitalize" }}>{type}</span>
            )}
          </h1>

          <ItemList data={data} />
        </div>
      )}
    </>
  );
};
export default ItemListContainer;
