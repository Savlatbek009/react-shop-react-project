import React from "react";

const BasketItem = (props) => {
  const { id, name, price, quantity, removeFromBasket } = props;
  return (
    <li
      className="d-flex dataAboutGoods"
      style={{ justifyContent: "space-between" }}
    >
      {name} x{quantity} = ${price * quantity}$
      <span className="text-success">
        <li
          onClick={() => removeFromBasket(id)}
          className="material-icons text-end basket-delete"
        >
          delete_forever
        </li>
      </span>
    </li>
  );
};

export default BasketItem;
