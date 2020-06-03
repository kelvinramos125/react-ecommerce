import React from "react";

const ProductsBody = ({ item }) => {
  return (
      <div className="grid-item">
          <h2>{item.name}</h2>
          <img className="grid-item__img" src={item.img} alt={item.alt} />
          <p>{item.price}</p>
          <p>{item.description}</p>

      <div className="purchasing">
        <a href="/" id="purchase__button">Purchase</a>
      </div>

      </div>
  );
};
export default ProductsBody;
