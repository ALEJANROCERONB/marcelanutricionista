import { Link } from "react-router-dom";
import { Instagram, MessageCircle, MapPin } from "lucide-react";
import Header from "./Header";
import About from "./About";
import ServicesPreview from "./ServicesPreview";
import Highlights from "./Highlights";
import "./Home.css";

export default function Home() {
  return (
    <>
      <Header />
      <About />
      <ServicesPreview />
      <Highlights />

      <div className="contact-strip">
        <div className="contact-strip-inner">
          <div className="contact-strip-cta">
            <p className="contact-strip-kicker">Hablemos</p>
            <h2 className="contact-strip-title">
              ¿Lista para dar el siguiente paso?
            </h2>
            <Link to="/contact" className="btn-primary">
              Agenda tu consulta
            </Link>
          </div>

          <div className="contact-strip-info">
            <div className="contact-strip-block">
              <p className="contact-strip-label">Sígueme en redes</p>
              <div className="social-icons">
                <a
                  href="https://www.instagram.com/nutri_marcelas"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Instagram"
                  className="social-icon"
                >
                  <Instagram size={22} />
                </a>
                <a
                  href="https://wa.me/+573172606180"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="WhatsApp"
                  className="social-icon"
                >
                  <MessageCircle size={22} />
                </a>
              </div>
            </div>

            <div className="contact-strip-divider" aria-hidden="true"></div>

            <div className="contact-strip-block">
              <p className="contact-strip-label">Ubicación</p>
              <p className="home-address">
                <MapPin size={18} />
                Popayán, Cauca, Colombia — Calle 18 Norte con Carrera 12
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
