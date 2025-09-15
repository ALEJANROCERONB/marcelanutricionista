import { useState, useEffect } from "react";
import "./Content.css"; // Estilos separados
import Quote from "../assets/quote.png";
import uno from "../assets/content/1.png";
import dos from "../assets/content/2.png";
import tres from "../assets/content/3.png";
import cuatro from "../assets/content/4.png";
import cinco from "../assets/content/5.png";
import videobienvenida from "../assets/videos/videobienvenida.mp4";

const images = [uno, dos, tres, cuatro, cinco];

function Content() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000); // Cambia cada 3 segundos

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="content-container">
      {/* Primera fila - Columna izquierda - Descripción */}
      <div className="description">
        <p>
          Dietista con MASTER EN NUTRICIÓN clínica de la universidad europea en
          España, también tengo certificación en diabetes y oncología. Y he
          realizado mi internado en la clínica Imbanaco. Durante mi formación
          académica he adquirido conocimientos sobre el manejo dietoterapéutico
          individualizado a las necesidades del paciente, en el desarrollo de
          mis consultas siempre busco el bienestar integral del paciente,
          indagando lo suficiente para determinar cuál es el mejor tratamiento
          para llevar a cabo por medio de un plan dietario saludable, sin
          restricciones ni excesos, disfrutando de la gran variedad de alimentos
          que se pueden aprovechar.
        </p>
      </div>

      {/* Primera fila - Columna derecha - Slideshow */}
      <div className="slideshow-container">
        <div className="slideshow-overlay">
          ¡CONTAMOS CON EQUIPO DE BIOIMPEDANCIA!
        </div>
        <img
          src={images[currentIndex]}
          alt="Equipo de bioimpedancia"
          className="slideshow-image"
        />
      </div>

      {/* Segunda fila - Columna izquierda - Video de bienvenida */}
      <div className="left-lower">
        <video className="video-content" controls>
          <source src={videobienvenida} type="video/mp4" />
          Tu navegador no soporta la reproducción de videos.
        </video>
      </div>

      {/* Segunda fila - Columna derecha - Imagen Quote */}
      <div className="right-lower">
        <img src={Quote} alt="Quote" className="quote" />
      </div>
    </div>
  );
}

export default Content;
