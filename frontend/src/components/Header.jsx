import logo from "../assets/logo.png";

function Header() {
  return (
    <header className="header">
      <div className="logo-box">
        <img src={logo} alt="CrazyPrint3D Logo" />
      </div>
      <nav className="nav">
        <a href="#info">Info</a>
        <a href="#productos">Productos</a>
        <a href="#contacto">Contacto</a>
      </nav>
    </header>
  );
}

export default Header;