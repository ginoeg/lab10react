import { Outlet,Link } from 'react-router-dom';

export default function App() {
  return (
    <div>
      <h1>Aplicacion</h1>
      <nav
        style={{
          borderBottom: "solid 1px",
          paddingBottom: "1rem",
        }}
      >
        <Link to="/producto">Productos</Link> |{" "}
        <Link to="/contacto">Contactos</Link>
      </nav>
      <Outlet />
    </div>
  );
}

