import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { services } from "../data/servicesData";
import "./Services.css";

const ServiceItem = ({ title, icon, content }) => {
  const Icon = icon;
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen((prev) => !prev);

  return (
    <div className={`service-container ${isOpen ? "is-open" : ""}`}>
      <div
        className="service-header"
        role="button"
        tabIndex={0}
        aria-expanded={isOpen}
        onClick={toggle}
        onKeyDown={(e) => {
          if (e.key === "Enter" || e.key === " ") {
            e.preventDefault();
            toggle();
          }
        }}
      >
        <span className="service-icon-badge">
          <Icon size={20} />
        </span>
        <h2 className="service-title">{title}</h2>
        <ChevronDown className="service-chevron" size={20} />
      </div>
      {isOpen && <div className="service-content">{content}</div>}
    </div>
  );
};

function Services() {
  return (
    <div className="services-main">
      <div className="section-head">
        <p className="section-kicker">Lo que ofrezco</p>
        <h1 className="services-title">Nuestros servicios</h1>
        <p className="services-subtitle">
          Planes de acompañamiento nutricional adaptados a cada objetivo,
          presenciales o virtuales.
        </p>
      </div>
      <div className="services-wrapper">
        {services.map((service) => (
          <ServiceItem
            key={service.id}
            title={service.title}
            icon={service.icon}
            content={service.content}
          />
        ))}
      </div>
    </div>
  );
}

export default Services;
