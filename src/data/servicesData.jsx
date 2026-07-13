import { Activity, UserCheck, Video } from "lucide-react";
import equipoImg from "../assets/equipo.png";

export const services = [
  {
    id: "examen-medico",
    icon: Activity,
    title: "Examen Médico",
    blurb:
      "Valoración de composición corporal con equipo de bioimpedancia de alta tecnología.",
    content: (
      <>
        <img
          src={equipoImg}
          alt="Equipo de bioimpedancia"
          className="service-image"
        />
        <p>
          Estos equipos denominados bioimpedancias funcionan con el paso de
          una corriente eléctrica de muy baja intensidad, por medio de
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
          <li>Ángulo de Fase que estima el estado Nutricional y Metabólico.</li>
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
            Seguimiento por tres pruebas, una por mes, del examen médico de
            composición corporal con equipo de bioimpedancia de alta
            tecnología (seca).
          </li>
          <li>
            Seguimiento por cuatro pruebas del examen médico de composición
            corporal con equipo de bioimpedancia de alta tecnología (seca).
          </li>
        </ul>
      </>
    ),
  },
  {
    id: "consulta-presencial",
    icon: UserCheck,
    title: "Consulta Nutricional Presencial",
    blurb:
      "Plan nutricional personalizado con seguimiento en consultorio.",
    content: (
      <>
        <p>El servicio incluye:</p>
        <ul>
          <li>Recordatorio 24 horas de ingestas usuales.</li>
          <li>Análisis de ingesta.</li>
          <li>Toma de examen por bioimpedancia o antropometría.</li>
          <li>Análisis de resultados por bioimpedancia o antropometría.</li>
          <li>Análisis bioquímicos (en caso de que el paciente los tenga).</li>
          <li>Recomendaciones nutricionales.</li>
          <li>Plan nutricional según el objetivo individualizado.</li>
          <li>
            Planificación con tiempo estipulado para alcanzar el objetivo
            planteado.
          </li>
          <li>Seguimiento nutricional vía WhatsApp.</li>
        </ul>
      </>
    ),
  },
  {
    id: "consulta-virtual",
    icon: Video,
    title: "Consulta Nutricional Virtual",
    blurb: "El mismo acompañamiento profesional, desde donde estés.",
    content: (
      <>
        <p>El servicio incluye:</p>
        <ul>
          <li>Recordatorio 24 horas de ingestas usuales.</li>
          <li>Análisis de ingesta.</li>
          <li>Toma de examen por bioimpedancia o antropometría.</li>
          <li>Análisis de resultados por bioimpedancia o antropometría.</li>
          <li>Análisis bioquímicos (en caso de que el paciente los tenga).</li>
          <li>Recomendaciones nutricionales.</li>
          <li>Plan nutricional según el objetivo individualizado.</li>
          <li>
            Planificación con tiempo estipulado para alcanzar el objetivo
            planteado.
          </li>
          <li>Seguimiento nutricional vía WhatsApp.</li>
        </ul>
      </>
    ),
  },
];
