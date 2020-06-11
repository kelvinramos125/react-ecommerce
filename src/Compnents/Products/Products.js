import React from "react";
import data from "../data/product.json";
import ProductsBody from "../ProductsBody/ProductsBody";

//this.state is setting type and cost to default as to show all the items in the list
class Products extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      type: "default",
      cost: "default",
    };
  }
//The event handler takes the value you select to equal it to match with what the filter is looking for
//this.setState passes an event to change the state of the page depending on the targeted value from the selector
  handlePriceDropDownSelect = (event) => {
    this.setState({
      cost: event.target.value,
      type: event.target.value,
    });
  };

  //Passes down type and cost to be used in filter and assign a new state depending on the selector
  render() {
    const { type, cost } = this.state;
    return (
      <div>
        {/* data.map allows the filter to map through the items to find the specific item that matches to the value you select in the filter */}
          <div className="react-product">
            {data.map((item) => {

              if (type === "default" && cost === "default") {
                return <ProductsBody item={item} />;
                //if type===item.type matches whatever type value you picked with the items type and returns it to show on the screen in ProductsBody
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
