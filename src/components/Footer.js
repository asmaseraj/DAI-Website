import "./footer.css";
import logo from "../assets/logo.png";

const Footer = () => {
  return (
    <div className="footer">
      <div className="top">
        <div>
          <img src={logo} alt="logo" />
          <p>The most reliable option.</p>
        </div>
        <div>
          <a href="/">
            <i className="fa-brands fa-facebook-square" />
          </a>
          <a href="/">
            <i className="fa-brands fa-instagram-square" />
          </a>
          <a href="/">
            <i className="fa fa-envelope-square" />
          </a>
          <a href="/">
            <i className="fa-brands fa-twitter-square" />
          </a>
        </div>
      </div>
      <div className="bottom">
        <div>
          <h3>Projects</h3>
          <a href="/">Project 1</a>
          <a href="/">Project 2</a>
          <a href="/">Project 3</a>
          <a href="/">Project 4</a>
        </div>
        <div>
          <h3>Comuunity</h3>
          <a href="/">Get to know us!</a>
          <a href="/">Out team</a>
        </div>
        <div>
          <h3>Help</h3>
          <a href="/">Support</a>
          <a href="/">Troubleshooting</a>
          <a href="/">Contant us</a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
