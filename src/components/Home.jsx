import Content from "./Content";
import { Instagram, MessageCircle } from "lucide-react";
import Header from "./Header";
import "./Home.css";

export default function Home() {
  return (
    <>
      <Header />
      <Content />

      <div className="home-info">
        <div className="social-icons">
          <span>REDES SOCIALES:</span>
          <a
            href="https://www.instagram.com/nutri_marcelas"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
          >
            <Instagram size={30} color="#E4405F" />
          </a>
          <a
            href="https://wa.me/+573172606180"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="WhatsApp"
          >
            <MessageCircle size={30} color="#25D366" />
          </a>
        </div>

        <p className="home-address">
          POPAYÁN CAUCA COLOMBIA - CALLE 18 NORTE CON CARRERA 12
        </p>
      </div>
    </>
  );
}
