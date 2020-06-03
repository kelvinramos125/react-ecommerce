import React from "react";
import "./Compnents/CSS/style.css";
import Routes from "./Compnents/Routes/Routes";
import Navbar from "./Compnents/Navbar/Navbar";
import Footer from "./Compnents/Footer/Footer";

class ProductPage extends React.Component {
  render() {
    return (
      <div>
        <Navbar />
        <Routes />
        <Footer />
      </div>
    );
  }
}
export default ProductPage;
