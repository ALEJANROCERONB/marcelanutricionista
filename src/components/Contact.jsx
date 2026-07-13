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
