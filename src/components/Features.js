import "./features.css";

function Features(props) {
  return (
    <>
      <div className="features">
        <h1>{props.title}</h1>
        <div className={props.cName}>
          <div className="feature-text">{props.text}</div>
          <div className="image">
            <img alt="feature image" src={props.image1} />
            <img alt="feature image" src={props.image2} />
          </div>
        </div>
      </div>
    </>
  );
}

export default Features;
