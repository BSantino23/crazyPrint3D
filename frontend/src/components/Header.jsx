import logo from "../assets/logo.png";
import NavButton from "./NavButton";

function Header() {
  return (
    <header className="header">
      <div className="logo-box">
        <img src={logo} alt="CrazyPrint3D Logo" />
      </div>

      <nav className="nav">
        <NavButton href="#info" text="Info" />
        <NavButton href="#productos" text="Productos" />
        <NavButton href="#contacto" text="Contacto" />
      </nav>
    </header>
  );
}

export default Header;