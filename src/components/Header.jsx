import { Link } from "react-router-dom";
import { BadgeCheck } from "lucide-react";
import marcelaFoto from "../assets/marcela-foto.png";
import "./Header.css";

const credentials = [
  "Nutricionista Dietista",
  "Master Nutrición Clínica",
  "Diabetes del Ciclo Vital",
];

function Header() {
  return (
    <section className="hero">
      <div className="hero-text">
        <p className="hero-kicker">¡Hola! Mi nombre es</p>
        <h1 className="hero-name">
          Marcela <span>Solano</span>
        </h1>
        <p className="hero-subtitle">
          Nutricionista dietista con master en nutrición clínica
        </p>

        <ul className="hero-credentials">
          {credentials.map((credential) => (
            <li key={credential} className="credential-chip">
              <BadgeCheck size={18} strokeWidth={2.2} />
              <span>{credential}</span>
            </li>
          ))}
        </ul>

        <Link to="/contact" className="btn-primary hero-cta">
          Agenda tu consulta
        </Link>
      </div>

      <div className="hero-photo">
        <img
          src={marcelaFoto}
          alt="Marcela Solano, nutricionista dietista"
          className="hero-photo-image"
        />
      </div>
    </section>
  );
}

export default Header;
