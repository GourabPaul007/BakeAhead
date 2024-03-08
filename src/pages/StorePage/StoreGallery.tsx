import "./StoreGallery.css";

import { Button, Card, Col, Container, Row } from "react-bootstrap";
import { cakes } from "../../data/Cakes";
import { singleProduct } from "../../models/SingleProduct";
import { Link } from "react-router-dom";

const phno = "9064040525";

interface StoreGalleryProps {
  storeName: string;
  currentProducts: singleProduct[];
}

const StoreGallery: React.FC<StoreGalleryProps> = ({
  storeName,
  currentProducts,
}) => {
  return (
    <>
      <Container>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            margin: "0 5em",
          }}
        >
          <Row xs={1} md={2} xl={3}>
            {currentProducts.map((eachSlide: singleProduct) => {
              return (
                <Col key={eachSlide.src}>
                  <a
                    style={{ cursor: "pointer", textDecoration: "none" }}
                    href={`https://wa.me/${phno}`}
                    target="_blank"
                  >
                    <Card className="imgCard">
                      <Card.Img
                        variant="top"
                        src={eachSlide.src}
                        style={{
                          height: 300,
                          objectFit: "cover",
                          borderRadius: 5,
                        }}
                      />
                      <Card.Body>
                        <Card.Title style={{ color: "#000" }}>
                          {eachSlide.name ? eachSlide.name : ""}
                        </Card.Title>
                        {/* <Card.Text>
                      Some quick example text to build on the card title and
                      make up the bulk of the card's content.
                    </Card.Text> */}
                        {/* <Button
                        variant="danger"
                        size="lg"
                        href={`https://wa.me/${phno}`}
                        target="_blank"
                      >
                        Buy Now
                      </Button> */}
                      </Card.Body>
                    </Card>
                  </a>
                </Col>
              );
            })}
          </Row>
        </div>
      </Container>
    </>
  );
};

export default StoreGallery;
