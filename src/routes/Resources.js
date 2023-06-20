import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import news2 from "../assets/news2.jpg";
import Footer from "../components/Footer";

function Resources() {
  return (
    <>
      <Navbar />
      <Hero
        cName="hero-mid"
        heroimage={news2}
        title=""
        text=""
        url1=""
        url2=""
        btnClass="hide"
        buttonText1=""
        buttonText2=""
      />
      <div>
        <br />
        <br />
        <br />
        <br />
        <br />
      </div>
      <Footer />
    </>
  );
}

export default Resources;
