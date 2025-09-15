import { Link, useLocation } from "react-router-dom";
import "./Navbar.css"; // Estilos separados

function Navbar() {
  const location = useLocation(); // Obtiene la ruta actual

  return (
    <nav className="navbar">
      <ul>
        <li>
          <Link
            to="/"
            className={location.pathname === "/" ? "active-link" : ""}
          >
            Inicio
          </Link>
        </li>
        <li>
          <Link
            to="/services"
            className={location.pathname === "/services" ? "active-link" : ""}
          >
            Servicios
          </Link>
        </li>
        <li>
          <Link
            to="/contact"
            className={location.pathname === "/contact" ? "active-link" : ""}
          >
            Contacto
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
