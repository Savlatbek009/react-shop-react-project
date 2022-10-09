import React from "react";

const Cart = (props) => {
  const { quantity = 0, hendleBasketShow = Function.prototype } = props;
  return (
    <div
      onClick={hendleBasketShow}
      style={{ cursor: "pointer" }}
      className="bg-primary cart p-2 text-white"
    >
      <i className="material-icons">add_shopping_cart</i>
      {quantity ? <span className="card-quantity">{quantity}</span> : null}
    </div>
  );
};

export default Cart;
