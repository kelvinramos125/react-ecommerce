import React from "react";
import data from "../data/product.json";
import ProductsBody from "../ProductsBody/ProductsBody";

class Products extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      type: "default",
      cost: "default",
    };
  }

  handlePriceDropDownSelect = (event) => {
    this.setState({
      cost: event.target.value,
      type: event.target.value,
    });
  };

  render() {
    const { type, cost } = this.state;
    return (
      <div>

          <div className="react-product">
            {data.map((item) => {
              if (type === "default" && cost === "default") {
                return <ProductsBody item={item} />;
              } else if (type === item.type || cost === item.cost) {
                return <ProductsBody item={item} />;
              }
            })}
          </div>

          <div className="filters-container">
          <div className="grid__filter">
            <label class="filters">Filter Type:</label>
            <select value={type} id="filterSelect" onChange={this.handlePriceDropDownSelect}>
              <option value="default">All</option>
              <option value="console">Console</option>
              <option value="accessorie">Accessories</option>
            </select>
          </div>

          <div className="grid__pricefilter">
            <label className="filters">Filter Price:</label>
            <select type={cost} id="priceSelect" onChange={this.handlePriceDropDownSelect}>
              <option value="default">All</option>
              <option value="low">$0 - $100</option>
              <option value="medium">$100 - $200</option>
              <option value="high">$200 - $400</option>
            </select>
          </div>
        </div>

      </div>
    );
  }
}

export default Products;
