import React from "react";
import PropTypes from "prop-types";

import Product from "./Product.js";

const ShoppingPage = ({ products, addProduct }) => {
  return (
    <div className="ShoppingPage">
      <h2>Products</h2>
      <div>
        {products.map((p, i) => (
          <Product
            key={"product" + i}
            product={p}
            addProduct={addProduct}
          ></Product>
        ))}
      </div>
    </div>
  );
};

ShoppingPage.propTypes = {
  products: PropTypes.array.isRequired,
  addProduct: PropTypes.func.isRequired,
};

export default ShoppingPage;
