import "./App.css";

import logo from "./assets/logo.png";
import repuestosImg from "./assets/repuestos.png";
import accesoriosImg from "./assets/accesorios.png";
import personalizadasImg from "./assets/personalizadas.png";

function App() {
  return (
    <div className="app-bg">
      <div className="bg-shape shape-1"></div>
      <div className="bg-shape shape-2"></div>
      <div className="bg-shape shape-3"></div>

      <div className="site-shell">
        <header className="header">
          <div className="logo-box">
            <img src={logo} alt="CrazyPrint3D Logo" />
          </div>

          <nav className="nav">
            <a href="#info">Info</a>
            <a href="#productos">Productos</a>
            <a href="#contacto">Contacto</a>
          </nav>
        </header>

        <main className="content-wrapper">
          <section className="hero reveal" id="inicio">
            <div className="hero-panel">
              <div className="hero-content">
                <h1>CRAZYPRINT 3D</h1>
                <p>
                  PIEZAS FUNCIONALES, REPUESTOS Y PROTOTIPOS FABRICADOS A
                  MEDIDA.
                </p>
              </div>

              <div className="hero-decor decor-one"></div>
              <div className="hero-decor decor-two"></div>
            </div>

            <div className="hero-bottom"></div>
          </section>

          <section className="section-card reveal" id="info">
            <div className="section-title">
              <h2>INFO</h2>
            </div>

            <div className="info-content">
              <h3>¿Qué es CrazyPrint3D?</h3>

              <p>
                CrazyPrint3D es una tienda online enfocada en soluciones
                técnicas impresas en 3D.
              </p>

              <p>
                Ofrecemos repuestos, accesorios funcionales y piezas
                personalizadas para talleres, máquinas y procesos productivos.
              </p>
            </div>
          </section>

          <section className="section-card reveal" id="productos">
            <div className="section-title">
              <h2>PRODUCTOS</h2>
            </div>

            <div className="products-grid">
              <article className="product-card">
                <img src={repuestosImg} alt="Repuestos técnicos" />
                <div className="product-info">
                  <h3>Repuestos</h3>
                  <h3>técnicos</h3>
                </div>
              </article>

              <article className="product-card">
                <img src={accesoriosImg} alt="Accesorios funcionales" />
                <div className="product-info">
                  <h3>Accesorios</h3>
                  <h3>funcionales</h3>
                </div>
              </article>

              <article className="product-card">
                <img src={personalizadasImg} alt="Piezas personalizadas" />
                <div className="product-info">
                  <h3>Piezas</h3>
                  <h3>personalizadas</h3>
                </div>
              </article>
            </div>
          </section>

          <section className="section-card reveal">
            <div className="section-title">
              <h2>Disponibilidad y entrega</h2>
            </div>

            <p className="availability-intro">
              Trabajamos con producción bajo pedido, por eso cada pieza se
              fabrica según disponibilidad, tamaño y nivel de detalle.
            </p>

            <div className="availability-list">
              <div className="availability-item">
                <div className="number">1</div>
                <div className="availability-text">
                  <h3>Capacidad de producción</h3>
                  <p>
                    Contamos con impresoras 3D disponibles para fabricar piezas
                    técnicas, repuestos y accesorios personalizados.
                  </p>
                  <p>
                    La cantidad de pedidos activos puede variar según la
                    demanda.
                  </p>
                </div>
              </div>

              <div className="availability-item">
                <div className="number">2</div>
                <div className="availability-text">
                  <h3>Tiempo estimado</h3>
                  <p>
                    El tiempo de impresión depende del tamaño, material,
                    complejidad y cantidad de piezas solicitadas.
                  </p>
                  <p>Piezas simples: pocas horas.</p>
                  <p>Piezas medianas o detalladas: entre 1 y 2 días.</p>
                  <p>Pedidos personalizados: según diseño y revisión.</p>
                </div>
              </div>

              <div className="availability-item">
                <div className="number">3</div>
                <div className="availability-text">
                  <h3>Entrega o retiro</h3>
                  <p>
                    Ofrecemos retiro en el local o envío a domicilio según la
                    ubicación del cliente.
                  </p>
                </div>
              </div>
            </div>
          </section>

          <section className="contact-section reveal" id="contacto">
            <div className="contact-footer">
              <div className="contact-left">
                <h2>Contacto</h2>
                <p>Estamos disponibles para pedidos, consultas y presupuestos.</p>
              </div>

              <div className="contact-data">
                <p>WhatsApp: +54 9 261 000 0000</p>
                <p>Email: crazyprint3d@gmail.com</p>
                <p>Ubicación: Mendoza, Argentina</p>
              </div>
            </div>
          </section>
        </main>
      </div>
    </div>
  );
}

export default App;