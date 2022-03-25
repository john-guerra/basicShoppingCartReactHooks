import React from "react";
import PropTypes from "prop-types";

const ShoppingCart = ({ productsInCart }) => {
  const total = Array.from(productsInCart.values()).reduce(
    (pTotal, p) => pTotal + p.qty * p.product.price,
    0
  );

  function renderProductsInCart() {
    return (
      <span>
        <h3>Products in Cart</h3>
        {Array.from(productsInCart.entries()).map(
          ([name, { product, qty }]) => (
            <div key={"pic_" + name}>
              {qty} {product.name} ({product.price}) <button>-</button>
            </div>
          )
        )}
      </span>
    );
  }

  return (
    <div className="ShoppingCart">
      <h2>Shopping Cart</h2>
      <label>
        Total <output>{total}</output>
      </label>
      {productsInCart.size ? (
        renderProductsInCart()
      ) : (
        <div>No products in cart yet</div>
      )}
    </div>
  );
};

ShoppingCart.propTypes = {
  productsInCart: PropTypes.object.isRequired,
};

export default ShoppingCart;
