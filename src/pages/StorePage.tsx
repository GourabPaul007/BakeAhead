import { useLocation, useParams } from "react-router-dom";
import Footer from "../components/Footer";
import FrontPageContent from "./MainPage/FrontPageContent";
import NavbarComponent from "../components/NavbarComponent";
import StoreGallery from "./StorePage/StoreGallery";
import StoreName from "./StorePage/StoreName";

import { cakes } from "../data/Cakes";
import { savoury } from "../data/Savoury";
import { singleProduct } from "../models/SingleProduct";

interface StorePageProps {}

const StorePage: React.FC<StorePageProps> = () => {
  // It Searches by url parameter names
  const { product } = useParams();
  let currentProducts: singleProduct[];

  switch (product) {
    case "cakes":
      currentProducts = cakes;
      break;
    case "savoury":
      currentProducts = savoury;
      break;
    case "others":
      currentProducts = cakes;
      break;
    default:
      currentProducts = [];
      break;
  }

  return (
    <>
      <NavbarComponent textColor={"dark"} />
      <div style={{ paddingTop: 96 }}>&nbsp;</div>
      <StoreName storeName={product ? product : "Store"} />
      {/* <div style={{ paddingTop: 12 }}>&nbsp;</div> */}
      <StoreGallery
        storeName={product ? product : "Store"}
        currentProducts={currentProducts}
      />
      <div style={{ paddingTop: 248 }}>&nbsp;</div>
      <Footer />
    </>
  );
};

export default StorePage;
