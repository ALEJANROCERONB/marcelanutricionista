import header from "../assets/header.png";
import "./Header.css";

const badges = ["Nutricionista Dietista", "Master Nutrición Clínica", "Diabetes del Ciclo Vital"];

function Header() {
  return (
    <div className="hero">
      <div className="hero-text">
        <p className="hero-greeting">¡Hola!</p>
        <blockquote className="hero-quote">
          <p className="hero-eyebrow">Mi nombre es</p>
          <h1 className="hero-name">Marcela Solano</h1>
          <p className="hero-subtitle">
            Nutricionista dietista con master en nutrición clínica
          </p>
        </blockquote>

        <ul className="hero-badges">
          {badges.map((badge) => (
            <li key={badge} className="badge">
              <span>{badge}</span>
            </li>
          ))}
        </ul>
      </div>

      <div className="hero-photo">
        <div className="hero-blob" aria-hidden="true"></div>
        <img
          src={header}
          alt="Marcela Solano, nutricionista dietista"
          className="hero-photo-image"
        />
      </div>
    </div>
  );
}

export default Header;
