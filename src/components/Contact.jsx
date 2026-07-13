import { Instagram, MessageCircle } from "lucide-react";
import { Mail, Phone } from "lucide-react";
import { useState } from "react";
import "./Contact.css";

function Contact() {
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState("idle"); // idle | error | sent

  const handleSendMessage = () => {
    if (message.trim() === "") {
      setStatus("error");
      return;
    }

    const subject = encodeURIComponent("Tengo dudas sobre tus servicios");
    const body = encodeURIComponent(message);
    const mailtoLink = `mailto:marcelasolano1204@gmail.com?subject=${subject}&body=${body}`;

    window.location.href = mailtoLink;

    setMessage("");
    setStatus("sent");
  };

  return (
    <div className="contact-container">
      <div className="section-head">
        <p className="section-kicker">Hablemos</p>
        <h1>Contacto</h1>
        <p className="contact-subtitle">
          Escríbeme por el medio que prefieras, con gusto te respondo.
        </p>
      </div>

      <div className="contact-grid">
        <a
          className="contact-item"
          href="https://wa.me/573172606180"
          target="_blank"
          rel="noopener noreferrer"
        >
          <span className="contact-item-icon">
            <Phone size={22} />
          </span>
          <span className="contact-item-text">
            <span className="contact-item-label">WhatsApp</span>
            <span className="contact-item-value">+57 317 260 6180</span>
          </span>
        </a>

        <a className="contact-item" href="mailto:marcelasolano1204@gmail.com">
          <span className="contact-item-icon">
            <Mail size={22} />
          </span>
          <span className="contact-item-text">
            <span className="contact-item-label">Correo</span>
            <span className="contact-item-value">marcelasolano1204@gmail.com</span>
          </span>
        </a>

        <a
          className="contact-item"
          href="https://www.instagram.com/nutri_marcelas"
          target="_blank"
          rel="noopener noreferrer"
        >
          <span className="contact-item-icon">
            <Instagram size={22} />
          </span>
          <span className="contact-item-text">
            <span className="contact-item-label">Instagram</span>
            <span className="contact-item-value">@nutri_marcelas</span>
          </span>
        </a>
      </div>

      <div className="message-box">
        <h2>Envíanos un mensaje</h2>
        <textarea
          placeholder="Escribe tu mensaje aquí..."
          value={message}
          onChange={(e) => {
            setMessage(e.target.value);
            if (status !== "idle") setStatus("idle");
          }}
        ></textarea>
        <button onClick={handleSendMessage}>Enviar</button>

        {status === "error" && (
          <p className="form-status form-status-error" role="alert">
            Por favor, escribe un mensaje antes de enviar.
          </p>
        )}
        {status === "sent" && (
          <p className="form-status form-status-success" role="status">
            Se abrió tu cliente de correo con el mensaje listo para enviar.
          </p>
        )}
      </div>
    </div>
  );
}

export default Contact;
