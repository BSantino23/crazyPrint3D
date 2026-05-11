import repuestosImg from "../assets/repuestos.png";
import accesoriosImg from "../assets/accesorios.png";
import personalizadasImg from "../assets/personalizadas.png";

import ProductCard from "./ProductCard";

function Products() {
  return (
    <section className="section-card reveal" id="productos">
      <div className="section-title">
        <h2>PRODUCTOS</h2>
      </div>

      <div className="products-grid">
        <ProductCard
          image={repuestosImg}
          alt="Repuestos técnicos"
          titleLineOne="Repuestos"
          titleLineTwo="técnicos"
        />

        <ProductCard
          image={accesoriosImg}
          alt="Accesorios funcionales"
          titleLineOne="Accesorios"
          titleLineTwo="funcionales"
        />

        <ProductCard
          image={personalizadasImg}
          alt="Piezas personalizadas"
          titleLineOne="Piezas"
          titleLineTwo="personalizadas"
        />
      </div>
    </section>
  );
}

export default Products;