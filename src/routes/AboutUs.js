import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import news2 from "../assets/news2.jpg";
import Footer from "../components/Footer";
import About from "../components/About";

function AboutUs() {
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
      <About />
      <Footer />
    </>
  );
}

export default AboutUs;
