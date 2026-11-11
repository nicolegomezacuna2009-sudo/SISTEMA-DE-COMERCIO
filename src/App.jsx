import { useState } from "react";
import "./App.css";

import NavBar from "./componentes/NavBar";
import Products, { productos } from "./componentes/products";
import ProductCar from "./componentes/productCar";
import Perfil from "./componentes/Perfil";

function App() {
  const [vista, setVista] = useState("inicio");
  const [carrito, setCarrito] = useState([]);
  const [busqueda, setBusqueda] = useState("");
  const [categoria, setCategoria] = useState("Todos");

  const agregarCarrito = (producto) => {
    const existe = carrito.find((item) => item.id === producto.id);

    if (existe) {
      setCarrito(
        carrito.map((item) =>
          item.id === producto.id
            ? { ...item, cantidad: item.cantidad + 1 }
            : item
        )
      );
    } else {
      setCarrito([...carrito, { ...producto, cantidad: 1 }]);
    }

    alert("¡Producto agregado al carrito!");
  };

  const eliminarProducto = (id) => {
    setCarrito(carrito.filter((item) => item.id !== id));
  };

  const cambiarCantidad = (id, cantidad) => {
    if (cantidad < 1) return;

    setCarrito(
      carrito.map((item) =>
        item.id === id ? { ...item, cantidad } : item
      )
    );
  };

  const totalProductos = carrito.reduce(
    (total, item) => total + item.cantidad,
    0
  );

  const totalPrecio = carrito.reduce(
    (total, item) => total + item.precio * item.cantidad,
    0
  );

  const categorias = [
    "Todos",
    "Tecnología",
    "Ropa",
    "Hogar",
    "Deportes",
    "Accesorios",
  ];

  const productosFiltrados = productos.filter((producto) => {
    const coincideBusqueda = producto.nombre
      .toLowerCase()
      .includes(busqueda.toLowerCase());

    const coincideCategoria =
      categoria === "Todos" || producto.categoria === categoria;

    return coincideBusqueda && coincideCategoria;
  });

  const finalizarCompra = (metodo) => {
    if (carrito.length === 0) return;

    alert(
      `Compra de demostración realizada.\nMétodo de pago: ${metodo}\nTotal: S/ ${totalPrecio.toFixed(2)}`
    );

    setCarrito([]);
    setVista("inicio");
  };

  return (
    <div className="app">
      <NavBar
        vista={vista}
        setVista={setVista}
        totalProductos={totalProductos}
        busqueda={busqueda}
        setBusqueda={setBusqueda}
      />

      {vista === "inicio" && (
        <>
          <section className="hero">
            <div className="hero-texto">
              <span className="etiqueta">BIENVENIDO A NOVA MARKET</span>

              <h1>
                Todo lo que buscas,
                <span> en un solo lugar.</span>
              </h1>

              <p>
                Encuentra tecnología, moda, accesorios, artículos
                para el hogar y mucho más.
              </p>

              <button onClick={() => document.getElementById("catalogo").scrollIntoView()}>
                Explorar productos
              </button>
            </div>

            <div className="hero-imagen">
              <img
                src="https://images.unsplash.com/photo-1607082349566-187342175e2f?w=900"
                alt="Compras en línea"
              />
            </div>
          </section>

          <section className="categorias">
            <h2>Explora nuestras categorías</h2>

            <div className="categorias-lista">
              {categorias.map((cat) => (
                <button
                  key={cat}
                  className={categoria === cat ? "categoria activa" : "categoria"}
                  onClick={() => {
                    setCategoria(cat);
                    document.getElementById("catalogo").scrollIntoView();
                  }}
                >
                  {cat}
                </button>
              ))}
            </div>
          </section>

          <section className="catalogo" id="catalogo">
            <div className="titulo-seccion">
              <div>
                <span className="etiqueta">NUESTRO CATÁLOGO</span>
                <h2>Productos destacados</h2>
              </div>
              <span>{productosFiltrados.length} productos</span>
            </div>

            <Products
              productos={productosFiltrados}
              agregarCarrito={agregarCarrito}
            />
          </section>
        </>
      )}

      {vista === "carrito" && (
        <ProductCar
          carrito={carrito}
          eliminarProducto={eliminarProducto}
          cambiarCantidad={cambiarCantidad}
          totalPrecio={totalPrecio}
          finalizarCompra={finalizarCompra}
        />
      )}

      {vista === "perfil" && <Perfil />}

      <footer className="footer">
        <h2>NOVA MARKET</h2>
        <p>Todo lo que buscas, en un solo lugar.</p>
        <p>© 2026 NOVA MARKET - Proyecto académico de comercio electrónico.</p>
      </footer>
    </div>
  );
}

export default App;
