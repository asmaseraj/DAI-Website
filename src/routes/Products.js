import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import productimage from "../assets/productimage.jpg";
import Footer from "../components/Footer";
import Features from "../components/Features";
import image1 from "../assets/feature1.jpg";
import image2 from "../assets/feature2.jpg";
import news2 from "../assets/news2.jpg";

function Products() {
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

      <Features
        title="Guaranteeing Data Privacy across Diverse Use-Cases"
        text="In the journey from conceptualization to innovation, your business needs to maximize data utility
      while ensuring data privacy. Our Data Protection Suite leverages advanced generative AI to enforce
      robust data protection policies wherever your data goes. This groundbreaking platform enables your
      legal, privacy, and data teams to collaborate effectively, ensuring every use-case, from testing to
      production, aligns with the precise level of protection required."
        image1={image1}
        image2={image2}
        cName="first-feature"
      />
      <Footer />
    </>
  );
}

export default Products;
