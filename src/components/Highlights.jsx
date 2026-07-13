import lifequote from "../assets/lifequote.png";
import "./Highlights.css";

function Highlights() {
  return (
    <>
      <div className="video-section">
        <div className="section-head">
          <p className="section-kicker">Conóceme</p>
          <h2 className="section-title">Un mensaje para ti</h2>
        </div>

        <div className="video-frame">
          <div className="video-wrapper">
            <iframe
              className="video-content"
              src="https://www.youtube.com/embed/kMrUCQL1M4c"
              title="Video de bienvenida"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      </div>

      <div className="quote-banner">
        <img src={lifequote} alt="Quote" className="quote-image" />
      </div>
    </>
  );
}

export default Highlights;
