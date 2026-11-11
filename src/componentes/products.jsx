export const productos = [
  {
    id: 1,
    nombre: "Laptop Lenovo IdeaPad",
    categoria: "Tecnología",
    precio: 1899,
    imagen: "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=600",
    descripcion: "Laptop para estudiar y trabajar.",
    oferta: "10% OFF",
  },
  {
    id: 2,
    nombre: "Audífonos Bluetooth",
    categoria: "Tecnología",
    precio: 89.90,
    imagen: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=600",
    descripcion: "Sonido de excelente calidad.",
    oferta: "15% OFF",
  },
  {
    id: 3,
    nombre: "Zapatillas deportivas",
    categoria: "Deportes",
    precio: 149.90,
    imagen: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=600",
    descripcion: "Ideales para tus actividades.",
    oferta: "20% OFF",
  },
  {
    id: 4,
    nombre: "Reloj elegante",
    categoria: "Accesorios",
    precio: 119.90,
    imagen: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=600",
    descripcion: "Diseño moderno y elegante.",
    oferta: "10% OFF",
  },
  {
    id: 5,
    nombre: "Mochila urbana",
    categoria: "Accesorios",
    precio: 79.90,
    imagen: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=600",
    descripcion: "Espaciosa para tus estudios.",
    oferta: "OFERTA",
  },
  {
    id: 6,
    nombre: "Silla de escritorio",
    categoria: "Hogar",
    precio: 299.90,
    imagen: "https://images.unsplash.com/photo-1596162954151-cdcb4c0f70a8?w=600",
    descripcion: "Comodidad para trabajar.",
    oferta: "12% OFF",
  },
  {
    id: 7,
    nombre: "Polera moderna",
    categoria: "Ropa",
    precio: 59.90,
    imagen: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=600",
    descripcion: "Estilo casual para todos los días.",
    oferta: "10% OFF",
  },
  {
    id: 8,
    nombre: "Pelota deportiva",
    categoria: "Deportes",
    precio: 71.10,
   imagen: "https://images.unsplash.com/photo-1579952363873-27f3bade9f55?w=600",
    descripcion: "Perfecta para jugar.",
    oferta: "10% OFF",
  },
];

export default function Products({ productos, agregarCarrito }) {
  return (
    <div className="productos-grid">
      {productos.length === 0 ? (
        <p>No encontramos productos.</p>
      ) : (
        productos.map((producto) => (
          <article className="producto-card" key={producto.id}>
            <div className="producto-imagen">
              <span className="oferta">{producto.oferta}</span>
              <img src={producto.imagen} alt={producto.nombre} />
            </div>

            <div className="producto-info">
              <span className="producto-categoria">
                {producto.categoria}
              </span>

              <h3>{producto.nombre}</h3>
              <p>{producto.descripcion}</p>

              <div className="estrellas">★★★★★</div>

              <div className="producto-precio">
                S/ {producto.precio.toFixed(2)}
              </div>

              <button onClick={() => agregarCarrito(producto)}>
                🛒 Agregar al carrito
              </button>
            </div>
          </article>
        ))
      )}
    </div>
  );
}