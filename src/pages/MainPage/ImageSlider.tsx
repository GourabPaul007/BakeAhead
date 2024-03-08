import "./ImageSlider.css";

// import React, { useState } from "react";
// import { SliderData } from "../../data/SliderData";
// import { FaArrowAltCircleRight, FaArrowAltCircleLeft } from "react-icons/fa";

// const ImageSlider = () => {
//   const [current, setCurrent] = useState(0);
//   const slides = SliderData;
//   const length = slides.length;

//   const nextSlide = () => {
//     setCurrent(current === length - 1 ? 0 : current + 1);
//   };

//   const prevSlide = () => {
//     setCurrent(current === 0 ? length - 1 : current - 1);
//   };

//   if (!Array.isArray(slides) || slides.length <= 0) {
//     return null;
//   }

//   return (
//     <>
//       <div className="slider">
//         <button className="left-arrow" onClick={prevSlide}>
//           <svg
//             xmlns="http://www.w3.org/2000/svg"
//             height="24px"
//             viewBox="0 0 24 24"
//             width="24px"
//             fill="#FFFFFF"
//           >
//             <path d="M0 0h24v24H0V0z" fill="none" opacity=".87" />
//             <path d="M16.62 2.99c-.49-.49-1.28-.49-1.77 0L6.54 11.3c-.39.39-.39 1.02 0 1.41l8.31 8.31c.49.49 1.28.49 1.77 0s.49-1.28 0-1.77L9.38 12l7.25-7.25c.48-.48.48-1.28-.01-1.76z" />
//           </svg>
//         </button>
//         <button className="right-arrow" onClick={nextSlide}>
//           <svg
//             xmlns="http://www.w3.org/2000/svg"
//             height="24px"
//             viewBox="0 0 24 24"
//             width="24px"
//             fill="#FFFFFF"
//           >
//             <path d="M24 24H0V0h24v24z" fill="none" opacity=".87" />
//             <path d="M7.38 21.01c.49.49 1.28.49 1.77 0l8.31-8.31c.39-.39.39-1.02 0-1.41L9.15 2.98c-.49-.49-1.28-.49-1.77 0s-.49 1.28 0 1.77L14.62 12l-7.25 7.25c-.48.48-.48 1.28.01 1.76z" />
//           </svg>
//         </button>
//         {SliderData.map((slide, index) => {
//           return (
//             <div
//               className={index === current ? "slide active" : "slide"}
//               key={index}
//             >
//               {index === current && (
//                 <img src={slide.image} alt="travel image" className="image" />
//               )}
//             </div>
//           );
//         })}
//       </div>
//     </>
//   );
// };

// export default ImageSlider;
