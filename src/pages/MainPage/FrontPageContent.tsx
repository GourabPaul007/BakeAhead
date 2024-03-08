import "./FrontPageContent.css";
import cake5 from "../../assets/images/cakes/cake8.jpg";
import cake3 from "../../assets/images/cakes/cake3.jpg";

interface FrontPageContentProps {}

const FrontPageContent: React.FC<FrontPageContentProps> = () => {
  return (
    <>
      {/* <!--SECTION 1--> */}
      <div className="sections section1">
        <section className="imageSection">
          <img src={cake5} style={{ objectFit: "cover" }} alt="" />
        </section>
        <section>
          <h1 className="title">Welcome to our Bakery</h1>
          <p>
            Baked goods have been around for thousands of years. The art of
            baking was developed early during the Roman Empire.
          </p>
          <p>
            It was a highly famous art as Roman citizens loved baked goods and
            demanded for them frequently for important occasions such as feasts
            and weddings etc. Due to the fame and desire that the art of baking
            received, around 300 BC, baking was introduced as an occupation and
            respectable profession for Romans.
          </p>
          <a href="/store/cakes" className="btn2">
            Our Products
          </a>
        </section>
      </div>

      <div style={{ marginTop: 72 }}>&nbsp;</div>

      {/* <!--SECTION 2--> */}
      <div className="sections section1">
        <section>
          <h1 className="title">BakeAhead by Vrindaa Sinhal</h1>
          <p>
            Baked goods have been around for thousands of years. The art of
            baking was developed early during the Roman Empire.
          </p>
          <p>
            It was a highly famous art as Roman citizens loved baked goods and
            demanded for them frequently for important occasions such as feasts
            and weddings etc. Due to the fame and desire that the art of baking
            received, around 300 BC, baking was introduced as an occupation and
            respectable profession for Romans.
          </p>
          <a href="/contactUs" className="btn2">
            CONTACT US
          </a>
        </section>
        <section className="imageSection">
          <img
            // src="https://i.ibb.co/Z6vLcz5/01.jpg"
            src={cake3}
            style={{ objectFit: "cover" }}
            alt=""
          />
        </section>
      </div>
    </>
  );
};

export default FrontPageContent;
