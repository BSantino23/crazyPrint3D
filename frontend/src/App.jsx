import "./App.css";

function App() {
  const categories = [
    {
      icon: "01",
      title: "Repuestos técnicos",
      text: "Piezas funcionales para reemplazar componentes rotos o difíciles de conseguir.",
    },
    {
      icon: "02",
      title: "Accesorios para taller",
      text: "Organizadores, soportes y herramientas impresas para mejorar el orden de trabajo.",
    },
    {
      icon: "03",
      title: "Soportes y adaptadores",
      text: "Soluciones a medida para montaje de sensores, cables, placas y máquinas.",
    },
    {
      icon: "04",
      title: "Prototipado rápido",
      text: "Fabricación de prototipos para probar ideas antes de producirlas en cantidad.",
    },
    {
      icon: "05",
      title: "Piezas personalizadas",
      text: "Diseño e impresión según medidas, fotos o piezas de referencia.",
    },
    {
      icon: "06",
      title: "Organización de procesos",
      text: "Accesorios pensados para agilizar tareas repetitivas y optimizar espacios.",
    },
  ];

  const products = [
    {
      name: "Soporte ajustable para sensor",
      description:
        "Pieza funcional para máquinas, automatización y montaje técnico.",
      price: "$8.500",
      material: "PETG",
    },
    {
      name: "Engranaje de reemplazo",
      description:
        "Repuesto impreso para mecanismos livianos y reparaciones rápidas.",
      price: "$6.200",
      material: "PLA+",
    },
    {
      name: "Organizador modular",
      description:
        "Sistema encastrable para ordenar herramientas, tornillos y accesorios.",
      price: "$12.000",
      material: "PLA",
    },
  ];

  return (
    <main className="page">
      <header className="header">
        <a href="#" className="logo">
          CrazyPrint<span>3D</span>
        </a>

        <nav className="nav">
          <a href="#productos">Productos</a>
          <a href="#servicios">Servicios</a>
          <a href="#proceso">Proceso</a>
          <a href="#contacto" className="nav-button">
            Pedir presupuesto
          </a>
        </nav>
      </header>

      <section className="hero">
        <div className="hero-content">
          <h1>
            Soluciones técnicas impresas en <span>3D</span>
          </h1>

          <p>
            Fabricamos repuestos, accesorios y piezas personalizadas para
            máquinas, talleres y procesos productivos. Convertimos problemas
            reales en piezas funcionales listas para usar.
          </p>

          <div className="hero-buttons">
            <button className="btn-primary">Ver productos</button>
            <button className="btn-secondary">Solicitar pieza</button>
          </div>
        </div>

        <div className="hero-card">
          <h3>Producción técnica a medida</h3>
          <p>
            Diseñamos, prototipamos e imprimimos piezas útiles para mejorar el
            trabajo diario en talleres, emprendimientos y entornos industriales.
          </p>

          <ul>
            <li>Repuestos difíciles de conseguir</li>
            <li>Modelado 3D personalizado</li>
            <li>Impresión en PLA, PLA+ y PETG</li>
            <li>Soluciones para máquinas y herramientas</li>
          </ul>
        </div>
      </section>

      <section className="section" id="servicios">
        <div className="section-header">
          <h2>Servicios técnicos</h2>
          <p>
            No solo vendemos impresiones 3D. Desarrollamos piezas pensadas para
            resolver necesidades concretas de uso, reparación y organización.
          </p>
        </div>

        <div className="grid">
          {categories.map((category) => (
            <article className="card" key={category.title}>
              <div className="card-icon">{category.icon}</div>
              <h3>{category.title}</h3>
              <p>{category.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section" id="productos">
        <div className="section-header">
          <h2>Productos destacados</h2>
          <p>
            Algunos ejemplos de piezas funcionales que pueden adaptarse a
            distintas medidas, materiales y necesidades.
          </p>
        </div>

        <div className="grid">
          {products.map((product) => (
            <article className="product-card" key={product.name}>
              <div className="product-img">PIEZA 3D</div>

              <div className="product-info">
                <h3>{product.name}</h3>
                <p>{product.description}</p>
                <span className="material">Material: {product.material}</span>
                <div className="price">{product.price}</div>
                <button className="btn-secondary">Ver detalle</button>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="section" id="proceso">
        <div className="section-header">
          <h2>Cómo trabajamos</h2>
          <p>
            Nuestro proceso está pensado para que puedas pedir una pieza aunque
            no tengas el modelo 3D listo.
          </p>
        </div>

        <div className="process">
          <article className="step">
            <div className="step-number">01</div>
            <h3>Nos enviás la idea</h3>
            <p>Puede ser una foto, una pieza rota, un plano o medidas básicas.</p>
          </article>

          <article className="step">
            <div className="step-number">02</div>
            <h3>Diseñamos la pieza</h3>
            <p>Modelamos o adaptamos el archivo según la función que necesitás.</p>
          </article>

          <article className="step">
            <div className="step-number">03</div>
            <h3>Imprimimos</h3>
            <p>Elegimos material, orientación y resistencia según el uso final.</p>
          </article>

          <article className="step">
            <div className="step-number">04</div>
            <h3>Entregamos</h3>
            <p>Recibís una pieza lista para probar, instalar o seguir ajustando.</p>
          </article>
        </div>
      </section>

      <section className="cta" id="contacto">
        <div className="cta-content">
          <h2>¿Necesitás una pieza personalizada?</h2>
          <p>
            Mandanos una foto, medidas o una idea. Te ayudamos a convertirla en
            una solución impresa en 3D.
          </p>
        </div>

        <button className="btn-primary">Pedir presupuesto</button>
      </section>

      <footer className="footer">
        <strong>CrazyPrint3D</strong>
        <span>Repuestos, accesorios y soluciones técnicas impresas en 3D.</span>
      </footer>
    </main>
  );
}

export default App;