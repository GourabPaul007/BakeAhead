import "./ContactUsPage.css";

import Footer from "../components/Footer";
import NavbarComponent from "../components/NavbarComponent";

interface ContactUsPageProps {}

const ContactUsPage: React.FC<ContactUsPageProps> = () => {
  const color = "#000";

  return (
    <>
      <NavbarComponent textColor={"black"} />
      <div style={{ paddingBottom: 150 }}></div>
      <div style={{ display: "grid", placeItems: "center", marginBottom: 40 }}>
        <h1 style={{ color: color }}>{"Contact Us"}</h1>
        <hr
          style={{
            border: `1px solid ${color}`,
            backgroundColor: color,
            width: 48,
          }}
        />
      </div>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d24023.2541419202!2d77.20704516284086!3d28.631734990043583!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cfd24f8845b47%3A0xc31d7dba181b70c9!2sGurudwara%20Bangla%20Sahib%20Ji!5e0!3m2!1sen!2sin!4v1640708611309!5m2!1sen!2sin"
        width="800"
        height="450"
        style={{ border: 0 }}
        allowFullScreen={true}
        loading="lazy"
      ></iframe>
      {/* <div style={{ borderLeft: "6px solid green", height: 48 }}></div> */}
      <br />
      <div className="aboutUs">
        <div className="left">
          Lorem ipsum dolor
          <br /> sit amet consectetur
          <br /> adipisicing elit.
        </div>

        <div className="right">
          Lorem ipsum dolor
          <br /> 9000587654
        </div>
      </div>
      <hr
        style={{
          border: `1px solid ${color}`,
          backgroundColor: color,
          width: 680,
          marginLeft: "auto",
          marginRight: "auto",
        }}
      />
      <div className="aboutUs2">
        <h1>Welcome to our Bakery</h1>
        <p>
          It was a highly famous art as Roman citizens loved baked goods and
          demanded for them frequently for important occasions such as feasts
          and weddings etc. Due to the fame and desire that the art of baking
          received, around 300 BC, baking was introduced as an occupation and
          respectable profession for Romans.
        </p>
        <a href="/store/cakes" className="btn">
          Order Now
        </a>
      </div>
      <div style={{ paddingBottom: 200 }}></div>

      <Footer />
    </>
  );
};

export default ContactUsPage;
