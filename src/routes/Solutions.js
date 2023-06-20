import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import productimage from "../assets/productimage.jpg";
import Footer from "../components/Footer";
import Features from "../components/Features";
import image1 from "../assets/feature1.jpg";
import image2 from "../assets/feature2.jpg";
import news2 from "../assets/news2.jpg";

function Solutions() {
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
        title="Synthetic Data: Bridging the Gap between Data Protection and Utility"
        text="Traditional data privacy and security measures often impose frustrating trade-offs. With our patented
        technology, you can meet legal and compliance requirements while seizing expanded data
        processing opportunities, thereby accelerating value creation."
        image1={image1}
        image2={image2}
        cName="first-feature"
      />
      <div>
        <br /> <br />{" "}
      </div>
      <Features
        title="Data Protection Suite: Your Gateway to Secure, Borderless Data
        Processing"
        text="Our software employs a combination of techniques, including Synthetic Data and Statutory
        Pseudonymization, to digitize and enforce data protection policies beyond controlled boundaries.
        The protected outputs, our unique Variant Twins, can safely traverse departments or even the globe,
        thanks to the programmed technical safeguards within them."
        image1={image1}
        image2={image2}
        cName="second-feature"
      />
      <Footer />
    </>
  );
}
export default Solutions;
