import "./news.css";

function NewsData(props) {
  return (
    <div className="n-card">
      <div className="n-image">
        <img src={props.image} alt="image>" />
      </div>
      <h4>{props.heading}</h4>
      <p>{props.text}</p>
    </div>
  );
}

export default NewsData;
