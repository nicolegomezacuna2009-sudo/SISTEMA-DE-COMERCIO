import { useState } from "react";

export default function Perfil() {
  const [nombre, setNombre] = useState("");
  const [correo, setCorreo] = useState("");

  return (
    <main className="perfil-pagina">
      <div className="perfil-card">
        <div className="perfil-icono">👤</div>

        <h1>Mi cuenta</h1>
        <p>Bienvenido a NOVA MARKET</p>

        <form
          onSubmit={(e) => {
            e.preventDefault();
            alert(`Bienvenido ${nombre}. Tu perfil de demostración está listo.`);
          }}
        >
          <label>Nombre completo</label>
          <input
            type="text"
            placeholder="Ingresa tu nombre"
            value={nombre}
            onChange={(e) => setNombre(e.target.value)}
            required
          />

          <label>Correo electrónico</label>
          <input
            type="email"
            placeholder="ejemplo@gmail.com"
            value={correo}
            onChange={(e) => setCorreo(e.target.value)}
            required
          />

          <button type="submit">Guardar perfil</button>
        </form>
      </div>
    </main>
  );
}