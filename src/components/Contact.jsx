import { Instagram, MessageCircle } from "lucide-react";
import { Mail, Phone } from "lucide-react";
import { useState } from "react";
import "./Contact.css";

function Contact() {
  const [message, setMessage] = useState("");

  const handleSendMessage = () => {
    if (message.trim() === "") {
      alert("Por favor, escribe un mensaje antes de enviar.");
      return;
    }

    // Simula el envío de correo con mailto:
    const subject = encodeURIComponent("Tengo dudas sobre tus servicios");
    const body = encodeURIComponent(message);
    const mailtoLink = `mailto:marcelasolano1204@gmail.com?subject=${subject}&body=${body}`;

    // Abrir cliente de correo
    window.location.href = mailtoLink;

    // Limpia el campo después de abrir el correo
    setMessage("");
  };

  return (
    <div className="contact-container">
      <h1>Contacto</h1>

      <div className="contact-item">
        <Phone size={24} />
        <a
          href="https://wa.me/573172606180"
          target="_blank"
          rel="noopener noreferrer"
        >
          WhatsApp: +57 317 260 6180
        </a>
      </div>

      <div className="contact-item">
        <Mail size={24} />
        <a href="mailto:marcelasolano1204@gmail.com">
          Correo: marcelasolano1204@gmail.com
        </a>
      </div>

      <div className="contact-item">
        <Instagram size={24} />
        <a
          href="https://www.instagram.com/nutri_marcelas"
          target="_blank"
          rel="noopener noreferrer"
        >
          Instagram: @nutri_marcelas
        </a>
      </div>

      <div className="message-box">
        <h2>Envíanos un mensaje</h2>
        <textarea
          placeholder="Escribe tu mensaje aquí..."
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        ></textarea>
        <button onClick={handleSendMessage}>Enviar</button>
      </div>
    </div>
  );
}

export default Contact;
