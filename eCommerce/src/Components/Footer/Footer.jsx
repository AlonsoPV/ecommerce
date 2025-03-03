const Footer = () => {
    return (
      <footer className="footer">
        <p>© {new Date().getFullYear()} Mi Tienda | Todos los derechos reservados</p>
        <p>
          Desarrollado por <a href="https://tusitio.com" target="_blank">Tu Nombre</a>
        </p>
        <div className="footer__social">
          <a href="https://facebook.com" target="_blank">📘</a>
          <a href="https://twitter.com" target="_blank">🐦</a>
          <a href="https://instagram.com" target="_blank">📷</a>
        </div>
      </footer>
    );
  };
  
  export default Footer;
  