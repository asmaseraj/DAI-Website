import "./news.css";
import "./NewsData.js";
import NewsData from "./NewsData.js";
import news1 from "../assets/news1.jpg";
import news2 from "../assets/news2.jpg";
import news3 from "../assets/news3.jpg";

function News() {
  return (
    <div className="news">
      <h1>Latest News!</h1>
      <p>You can discover recent news about our company!</p>
      <div className="newscard">
        <NewsData
          image={news1}
          heading="We have a new product!"
          text="Check out our new product. Check out our new product. Check out our new product. Check out our new product. Check out our new product."
        />
        <NewsData
          image={news2}
          heading="New Solution!"
          text="Check out our new solution. Check out our new solution. Check out our new solution. Check out our new solution. Check out our new solution."
        />
        <NewsData
          image={news3}
          heading="We have job opportunities!"
          text="Contact us and we'll set an interview. Contact us and we'll set an interview. Contact us and we'll set an interview. Contact us and we'll set an interview. "
        />
      </div>
    </div>
  );
}
export default News;
