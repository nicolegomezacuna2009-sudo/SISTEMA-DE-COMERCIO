export default function ProductCar({
  carrito,
  eliminarProducto,
  cambiarCantidad,
  totalPrecio,
  finalizarCompra,
}) {
  return (
    <main className="carrito-pagina">
      <h1>🛒 Mi carrito de compras</h1>

      {carrito.length === 0 ? (
        <div className="carrito-vacio">
          <h2>Tu carrito está vacío</h2>
          <p>¡Agrega productos y comienza a comprar!</p>
        </div>
      ) : (
        <>
          <div className="carrito-lista">
            {carrito.map((item) => (
              <div className="carrito-item" key={item.id}>
                <img src={item.imagen} alt={item.nombre} />

                <div className="carrito-detalle">
                  <h3>{item.nombre}</h3>
                  <p>S/ {item.precio.toFixed(2)}</p>

                  <div className="cantidad">
                    <button
                      onClick={() =>
                        cambiarCantidad(item.id, item.cantidad - 1)
                      }
                    >
                      -
                    </button>

                    <span>{item.cantidad}</span>

                    <button
                      onClick={() =>
                        cambiarCantidad(item.id, item.cantidad + 1)
                      }
                    >
                      +
                    </button>
                  </div>
                </div>

                <button
                  className="eliminar"
                  onClick={() => eliminarProducto(item.id)}
                >
                  Eliminar
                </button>
              </div>
            ))}
          </div>

          <div className="resumen">
            <h2>Resumen de compra</h2>
            <p>Subtotal: S/ {totalPrecio.toFixed(2)}</p>
            <h3>Total: S/ {totalPrecio.toFixed(2)}</h3>

            <h3>Selecciona tu método de pago</h3>

            <button onClick={() => finalizarCompra("Tarjeta")}>
              💳 Tarjeta
            </button>

            <button onClick={() => finalizarCompra("Yape")}>
              💜 Yape
            </button>

            <button onClick={() => finalizarCompra("Plin")}>
              💙 Plin
            </button>

            <p className="aviso-pago">
              Métodos de pago simulados para el proyecto académico.
            </p>
          </div>
        </>
      )}
    </main>
  );
}