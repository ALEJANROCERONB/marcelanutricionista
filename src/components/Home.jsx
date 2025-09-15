import React from "react";
import Content from "./Content";
import { Instagram, MessageCircle } from "lucide-react";
import Header from "./Header";

export default function Home() {
  return (
    <>
      <Header />
      <Content />

      {/* Íconos de Instagram y WhatsApp */}
      <div className="social-icons">
        REDES SOCIALES:
        <a
          href="https://www.instagram.com/nutri_marcelas"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Instagram size={30} color="#E4405F" />
        </a>
        <a
          href="https://wa.me/+573172606180"
          target="_blank"
          rel="noopener noreferrer"
        >
          <MessageCircle size={30} color="#25D366" />
        </a>
      </div>

      <div style={{ textAlign: "center", marginBottom: "10px" }}>
        POPAYÁN CAUCA COLOMBIA - CALLE 18 NORTE CON CARRERA 12
      </div>
    </>
  );
}
