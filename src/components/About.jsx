import { useState, useEffect } from "react";
import "./About.css";
import uno from "../assets/content/1.png";
import dos from "../assets/content/2.png";
import tres from "../assets/content/3.png";
import cuatro from "../assets/content/4.png";
import cinco from "../assets/content/5.png";

const images = [uno, dos, tres, cuatro, cinco];

function About() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000); // Cambia cada 3 segundos

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="about-section">
      <div className="section-head">
        <p className="section-kicker">Sobre mí</p>
        <h2 className="section-title">Un acompañamiento nutricional cercano</h2>
      </div>

      <div className="about-container">
        <div className="about-card description-card">
          <p>
            Dietista con MASTER EN NUTRICIÓN clínica de la universidad europea
            en España, también tengo certificación en diabetes y oncología. Y
            he realizado mi internado en la clínica Imbanaco. Durante mi
            formación académica he adquirido conocimientos sobre el manejo
            dietoterapéutico individualizado a las necesidades del paciente,
            en el desarrollo de mis consultas siempre busco el bienestar
            integral del paciente, indagando lo suficiente para determinar
            cuál es el mejor tratamiento para llevar a cabo por medio de un
            plan dietario saludable, sin restricciones ni excesos,
            disfrutando de la gran variedad de alimentos que se pueden
            aprovechar.
          </p>
        </div>

        <div className="about-card slideshow-container">
          <span className="content-badge">Equipo de bioimpedancia</span>
          <img
            src={images[currentIndex]}
            alt="Equipo de bioimpedancia"
            className="slideshow-image"
          />
        </div>
      </div>
    </div>
  );
}

export default About;
