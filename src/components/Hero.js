import "./Hero.css";
import heroimage from "../assets/heroimage.jpg";
function Hero(props) {
  return (
    <>
      <div className={props.cName}>
        <img src={props.heroimage} alt="hero image" />
        <div className="hero-text">
          <h1>{props.title}</h1>
          <p>{props.text}</p>
          <a href={props.url1} className={props.btnClass}>
            {props.buttonText1}
          </a>
          <a href={props.url2} className={props.btnClass}>
            {props.buttonText2}
          </a>
        </div>
      </div>
    </>
  );
}

export default Hero;
