import { Link } from "react-router-dom";
import { services } from "../data/servicesData";
import "./ServicesPreview.css";

function ServicesPreview() {
  return (
    <div className="services-preview">
      <div className="section-head">
        <p className="section-kicker">Lo que ofrezco</p>
        <h2 className="section-title">Servicios pensados para ti</h2>
      </div>

      <div className="services-preview-grid">
        {services.map((service) => {
          const Icon = service.icon;
          return (
            <div key={service.id} className="preview-card">
              <span className="preview-icon-badge">
                <Icon size={22} />
              </span>
              <h3 className="preview-title">{service.title}</h3>
              <p className="preview-blurb">{service.blurb}</p>
            </div>
          );
        })}
      </div>

      <Link to="/services" className="btn-primary services-preview-cta">
        Ver todos los servicios
      </Link>
    </div>
  );
}

export default ServicesPreview;
