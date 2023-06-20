import "./contactform.css";

function ContactForm() {
  return (
    <div className="form-container">
      <h1>Take the Next Step in Your Data Innovation Journey.</h1>
      <p>
        If your organization is driving innovation, modernization, or digital
        transformation, our Data Protection Suite will safeguard your
        initiatives with secure data. Complete the form below to schedule a
        briefing about your current data protection challenges and learn how to
        scale your platform for faster results without sacrificing accuracy.
      </p>
      <form>
        <input placeholder="Name" />
        <input placeholder="E-mail" />
        <input placeholder="Subject" />
        <textarea placeholder="Message" rows="4"></textarea>
        <button> Send Message</button>
      </form>
    </div>
  );
}
export default ContactForm;
