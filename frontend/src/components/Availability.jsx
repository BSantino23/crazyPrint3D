function Availability() {
  return (
    <section className="section-card reveal">
      <div className="section-title">
        <h2>Disponibilidad y entrega</h2>
      </div>

      <p className="availability-intro">
        Trabajamos con producción bajo pedido, por eso cada pieza se fabrica
        según disponibilidad, tamaño y nivel de detalle.
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
            <p>La cantidad de pedidos activos puede variar según la demanda.</p>
          </div>
        </div>

        <div className="availability-item">
          <div className="number">2</div>

          <div className="availability-text">
            <h3>Tiempo estimado</h3>
            <p>
              El tiempo de impresión depende del tamaño, material, complejidad y
              cantidad de piezas solicitadas.
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
  );
}

export default Availability;