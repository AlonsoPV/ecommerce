import './Footer.css'
const Footer = () => {
    return (
      <footer className="footer">
        <p>© {new Date().getFullYear()} eMotion Sites</p>
        <p>
          Desarrollado por <a href="www.emotionsites.com" target="_blank">eMotion Sites</a>
        </p>
        <div className="footer__redes">
          <a href="#" target="_blank">F</a>
          <a href="#" target="_blank">I</a>
          <a href="#" target="_blank">LIn</a>
        </div>
      </footer>
    );
  };
  
  export default Footer;
  
