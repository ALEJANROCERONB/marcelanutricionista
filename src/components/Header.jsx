import header from "../assets/header.png";
import "./Header.css";

function Header() {
  return (
    <div className="header-container">
      <img src={header} alt="Header" className="header-image" />
    </div>
  );
}

export default Header;
