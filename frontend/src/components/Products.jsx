import { useState, useEffect } from "react"; // 1. Importamos los Hooks
import repuestosImg from "../assets/repuestos.png";
import accesoriosImg from "../assets/accesorios.png";
import personalizadasImg from "../assets/personalizadas.png";

import ProductCard from "./ProductCard";

function Products() {
  // 2. Definimos el estado inicial como un array vacío
  const [listaProductos, setListaProductos] = useState([]);

  // 3. Agregamos el useEffect para simular la carga de datos
  useEffect(() => {
    // Aquí es donde en el futuro harás el fetch("tu-api.com/productos")
    const datosSimulados = [
      {
        id: 1,
        image: repuestosImg,
        alt: "Repuestos técnicos",
        t1: "Repuestos",
        t2: "técnicos",
      },
      {
        id: 2,
        image: accesoriosImg,
        alt: "Accesorios funcionales",
        t1: "Accesorios",
        t2: "funcionales",
      },
      {
        id: 3,
        image: personalizadasImg,
        alt: "Piezas personalizadas",
        t1: "Piezas",
        t2: "personalizadas",
      },
    ];

    setListaProductos(datosSimulados);
  }, []); // [] vacío significa que corre una sola vez al cargar la página

  return (
    <section className="section-card reveal" id="productos">
      <div className="section-title">
        <h2>PRODUCTOS</h2>
      </div>

      <div className="products-grid">
        {/* 4. Mapeamos el estado para renderizar las cards automáticamente */}
        {listaProductos.map((prod) => (
          <ProductCard
            key={prod.id} // React necesita una key única
            image={prod.image}
            alt={prod.alt}
            titleLineOne={prod.t1}
            titleLineTwo={prod.t2}
          />
        ))}
      </div>
    </section>
  );
}

export default Products;