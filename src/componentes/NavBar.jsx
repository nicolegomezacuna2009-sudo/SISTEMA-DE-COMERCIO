import "./NavBar.modules.css";

export default function NavBar({
  vista,
  setVista,
  totalProductos,
  busqueda,
  setBusqueda,
}) {
  return (
    <header className="navbar">
      <div className="logo" onClick={() => setVista("inicio")}>
        <span>✦</span> NOVA MARKET
      </div>

      <div className="buscador">
        <input
          type="text"
          placeholder="Buscar productos..."
          value={busqueda}
          onChange={(e) => {
            setBusqueda(e.target.value);
            setVista("inicio");
          }}
        />
        <span>🔍</span>
      </div>

      <nav>
        <button
          className={vista === "inicio" ? "nav-activo" : ""}
          onClick={() => setVista("inicio")}
        >
          Inicio
        </button>

        <button onClick={() => setVista("perfil")}>
          👤 Mi perfil
        </button>

        <button onClick={() => setVista("carrito")}>
          🛒 Carrito ({totalProductos})
        </button>
      </nav>
    </header>
  );
}
