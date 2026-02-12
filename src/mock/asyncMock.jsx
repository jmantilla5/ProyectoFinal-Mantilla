const productos = [
  {
    id: "01",
    name: "Ciudad 1",
    description: "Descripcion de la ciudad 1",
    stock: 20,
    price: 25000,
    category: "nuevos",
    img: "https://picsum.photos/seed/picsum/200",
  },

  {
    id: "02",
    name: "Ciudad 2",
    description: "Descripcion de la ciudad 2",
    stock: 24,
    price: 35000,
    category: "mas vendidos",
    img: "https://picsum.photos/seed/200/150",
  },

  {
    id: "03",
    name: "Ciudad 3",
    description: "Descripcion de la ciudad 3",
    stock: 54,
    price: 45000,
    category: "ofertas",
    img: "https://i.postimg.cc/rFmLqyYG/Tokyo.jpg",
  },

  {
    id: "04",
    name: "Ciudad 4",
    description: "Descripcion de la ciudad 4",
    stock: 33,
    price: 38000,
    category: "ofertas",
    img: "https://media.istockphoto.com/id/1465916031/es/foto/el-camino-al-avi%C3%B3n.webp?b=1&s=612x612&w=0&k=20&c=reRTTk3DEvx8OtxjYfTsyQHRQIFltVjh21bmxysg80k=",
  },
];

let error = false;

export const getProducts = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (error) {
        reject("Error al obtener productos, intente nuevamente");
      } else {
        resolve(productos);
      }
    }, 3000);
  });
};

export const getItem = (id) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (error) {
        reject("Error al obtener productos, intente nuevamente");
      } else {
        let prod = productos.find((prod) => prod.id === id);
        resolve(prod);
      }
    }, 3000);
  });
};
