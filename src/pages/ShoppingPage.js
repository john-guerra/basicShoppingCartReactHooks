import React, { useState } from "react";
import PropTypes from "prop-types";

import ShoppingCart from "../components/ShoppingCart.js";
import ProductList from "../components/ProductList.js";

const ShoppingPage = () => {
  // An array of the products in the catalog
  const [products, setProducts] = useState([
    { name: "Olive Oil", price: 12 },
    { name: "John's Beautifier", price: 122 },
    { name: "Soccer Ball", price: 22 },
  ]);

  // A Map that goes from product name to qty, to keep track of the products that will be bougth
  const [productsInCart, setProductsInCart] = useState(new Map());

  function addProduct(product) {
    // To keep it immutable
    const newProductsInCart = new Map(productsInCart);

    let currentQty = newProductsInCart.get(product.name);
    if (currentQty === undefined) {
      // I haven't added the product yet
      currentQty = { product: product, qty: 0 };
    }
    currentQty.qty += 1;
    newProductsInCart.set(product.name, currentQty);

    setProductsInCart(newProductsInCart);
  }

  return (
    <div className="ShoppingPage">
      <div style={{ display: "flex" }}>
        <div style={{ width: "60%" }}>
          <ProductList
            products={products}
            addProduct={addProduct}
          ></ProductList>
        </div>
        <div style={{ width: "40%" }}>
          <ShoppingCart productsInCart={productsInCart}></ShoppingCart>
        </div>
      </div>
    </div>
  );
};

ShoppingPage.propTypes = {};

export default ShoppingPage;
