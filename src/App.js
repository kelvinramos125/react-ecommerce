import React from "react";
import "./Components/CSS/style.css";
import Routes from "./Components/Routes/Routes";
import Navbar from "./Components/Navbar/Navbar";
import Footer from "./Components/Footer/Footer";

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
