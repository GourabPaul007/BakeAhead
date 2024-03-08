import "./ImageCarousel.css";

import { Carousel } from "react-bootstrap";
import { SliderData } from "../../data/SliderData";

interface ImageCarouselProps {}

const ImageCarousel: React.FC<ImageCarouselProps> = () => {
  return (
    <>
      <Carousel>
        {SliderData.map((eachSlider) => {
          return (
            <Carousel.Item key={eachSlider.image}>
              <img
                className="d-block w-100"
                style={{ width: "100vw", height: "100vh", objectFit: "cover" }}
                src={eachSlider.image}
                alt="First slide"
              />
              <Carousel.Caption>
                <h2>
                  {eachSlider.tagline ? eachSlider.tagline : "Slide label"}
                </h2>
                {/* <p>
                  {eachSlider.name
                    ? eachSlider.name
                    : "Nulla vitae elit libero, a pharetra augue mollis interdum."}
                </p> */}
              </Carousel.Caption>
            </Carousel.Item>
          );
        })}
      </Carousel>
    </>
  );
};

export default ImageCarousel;
