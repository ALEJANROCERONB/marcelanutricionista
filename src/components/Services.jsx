import { useState } from "react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";
import equipoImg from "../assets/equipo.png";

const ServiceItem = ({ title, content }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="service-container">
      <div className="service-header" onClick={() => setIsOpen(!isOpen)}>
        <h2 className="service-title">{title}</h2>
        {isOpen ? (
          <FaChevronUp className="service-icon" />
        ) : (
          <FaChevronDown className="service-icon" />
        )}
      </div>
      {isOpen && <div className="service-content">{content}</div>}
    </div>
  );
};

function Services() {
  return (
    <div className="services-main">
      <h1 className="services-title">Nuestros Servicios</h1>
      <div className="services-wrapper">
        {/* Examen Médico */}
        <ServiceItem
          title="Examen Médico"
          content={
            <>
              <img
                src={equipoImg}
                alt="Equipo de bioimpedancia"
                className="service-image"
              />
              <p>
                Estos equipos denominados bioimpedancias funcionan con el paso
                de una corriente eléctrica de muy baja intensidad, por medio de
                electrodos que segmentan cada brazo, pierna y el tronco.
              </p>
              <p>
                Por medio de una técnica simple, rápida, no invasiva y sin dolor
                alguno. Obtendrás los resultados de tu:
              </p>
              <ul>
                <li>Masa Grasa / Masa Libre de Grasa.</li>
                <li>Masa Muscular Esquelética.</li>
                <li>Gráficos de Composición Corporal.</li>
                <li>Agua Corporal (extracelular e intracelular).</li>
                <li>Estado de los Líquidos VS Masa Celular del Cuerpo.</li>
                <li>Grasa Visceral.</li>
                <li>
                  Ángulo de Fase que estima el estado Nutricional y Metabólico.
                </li>
              </ul>
              <p>
                Estos resultados tendrán un formato de semáforo y graficado para
                facilitar su interpretación. Todo esto permitiría un mejor
                asesoramiento nutricional mucho más individualizado, ayudando a
                entender los efectos y evolución de la terapia médica y
                nutricional. Está indicado tanto para población adulta como para
                pacientes pediátricos.
              </p>
              <p>
                <strong>
                  Específicamente este equipo está validado científicamente con
                  Gold standard a nivel mundial.
                </strong>
              </p>
              <p>
                <strong>Paquete de seguimiento:</strong>
              </p>
              <ul>
                <li>
                  Seguimiento por tres pruebas, una por mes, del examen médico
                  de composición corporal con equipo de bioimpedancia de alta
                  tecnología (seca).
                </li>
                <li>
                  Seguimiento por cuatro pruebas del examen médico de
                  composición corporal con equipo de bioimpedancia de alta
                  tecnología (seca).
                </li>
              </ul>
            </>
          }
        />

        {/* Consulta Nutricional Presencial */}
        <ServiceItem
          title="Consulta Nutricional Presencial"
          content={
            <>
              <p>El servicio incluye:</p>
              <ul>
                <li>Recordatorio 24 horas de ingestas usuales.</li>
                <li>Análisis de ingesta.</li>
                <li>Toma de examen por bioimpedancia o antropometría.</li>
                <li>
                  Análisis de resultados por bioimpedancia o antropometría.
                </li>
                <li>
                  Análisis bioquímicos (en caso de que el paciente los tenga).
                </li>
                <li>Recomendaciones nutricionales.</li>
                <li>Plan nutricional según el objetivo individualizado.</li>
                <li>
                  Planificación con tiempo estipulado para alcanzar el objetivo
                  planteado.
                </li>
                <li>Seguimiento nutricional vía WhatsApp.</li>
              </ul>
            </>
          }
        />

        {/* Consulta Nutricional Virtual */}
        <ServiceItem
          title="Consulta Nutricional Virtual"
          content={
            <>
              <p>El servicio incluye:</p>
              <ul>
                <li>Recordatorio 24 horas de ingestas usuales.</li>
                <li>Análisis de ingesta.</li>
                <li>Toma de examen por bioimpedancia o antropometría.</li>
                <li>
                  Análisis de resultados por bioimpedancia o antropometría.
                </li>
                <li>
                  Análisis bioquímicos (en caso de que el paciente los tenga).
                </li>
                <li>Recomendaciones nutricionales.</li>
                <li>Plan nutricional según el objetivo individualizado.</li>
                <li>
                  Planificación con tiempo estipulado para alcanzar el objetivo
                  planteado.
                </li>
                <li>Seguimiento nutricional vía WhatsApp.</li>
              </ul>
            </>
          }
        />
      </div>
    </div>
  );
}

export default Services;

/* Estilos en el mismo archivo */
const styles = `
  .services-main {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    min-height: 100vh;
    width: 100vw;
    text-align: center;
    background-color: #f4f4f4;
    padding: 50px 20px 20px;
    box-sizing: border-box;
    gap: 25px;
  }

  .services-title {
    font-size: 2.5rem;
    margin-bottom: 25px;
    margin-top: 0;
    color: #677CE0;
  }

  .services-wrapper {
    width: 100%;
    max-width: 800px;
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .service-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    background: rgb(187, 188, 189);
    padding: 20px;
    border-radius: 12px;
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.15);
    width: 100%;
    text-align: center;
    margin-bottom: 20px;
  }

  .service-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    cursor: pointer;
  }

  .service-title {
    font-size: 1.5rem;
    font-weight: bold;
    color: #677CE0;
  }

  .service-icon {
    color: #677CE0;
  }

  .service-content {
    margin-top: 5px;
    color: rgb(18, 18, 18);
    text-align: left;
    width: 100%;
    max-width: 700px;
    font-size: 0.95rem; /* Reduce ligeramente el tamaño del texto */
    line-height: 1.4; /* Reduce la separación entre líneas */
  }

  .service-content p {
    margin-bottom: 8px; /* Reduce espacio entre párrafos */
  }

  .service-content ul {
    padding-left: 20px;
    margin-bottom: 8px;
  }

  .service-content li {
    margin-bottom: 3px;
  }

  .service-image {
    width: 100%;
    max-width: 500px;
    display: block;
  margin: 0 auto 15px;
    border-radius: 12px;
    align-self: center
  }
`;

const styleSheet = document.createElement("style");
styleSheet.type = "text/css";
styleSheet.innerText = styles;
document.head.appendChild(styleSheet);
