import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import "./Navbar.css";

function Navbar() {
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname]);

  const linkClass = (path) =>
    location.pathname === path ? "active-link" : "";

  return (
    <nav className="navbar">
      <div className="navbar-inner">
        <Link to="/" className="navbar-brand">
          Marcela Solano
        </Link>

        <button
          type="button"
          className="navbar-toggle"
          aria-label={isOpen ? "Cerrar menú" : "Abrir menú"}
          aria-expanded={isOpen}
          onClick={() => setIsOpen((prev) => !prev)}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        <ul className={`navbar-links ${isOpen ? "open" : ""}`}>
          <li>
            <Link to="/" className={linkClass("/")}>
              Inicio
            </Link>
          </li>
          <li>
            <Link to="/services" className={linkClass("/services")}>
              Servicios
            </Link>
          </li>
          <li>
            <Link to="/contact" className={linkClass("/contact")}>
              Contacto
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
