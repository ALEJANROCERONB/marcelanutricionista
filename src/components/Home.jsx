import Content from "./Content";
import { Instagram, MessageCircle, MapPin } from "lucide-react";
import Header from "./Header";
import "./Home.css";

export default function Home() {
  return (
    <>
      <Header />
      <Content />

      <div className="contact-strip">
        <div className="contact-strip-inner">
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
    </>
  );
}
