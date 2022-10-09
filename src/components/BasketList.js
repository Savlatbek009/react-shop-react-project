import React from "react";
import BasketItem from "./BasketItem";

const BasketList = (props) => {
  const { order, removeFromBasket } = props;
  const totalPrice = order.reduce((sum, el) => {
    return sum + el.price * el.quantity;
  }, 0);

  return (
    <ul className="collection basketList">
      <li className="collection-item active">Basket</li>
      {order.length ? (
        order.map((item) => {
          return (
            <BasketItem
              removeFromBasket={removeFromBasket}
              key={item.id}
              {...item}
            />
          );
        })
      ) : (
        <li className="dataAboutGoods">Basket is empty</li>
      )}
      <li className="collection-item active">Total: {totalPrice}$</li>
      <i
        className="material-icons basket-close"
        onClick={props.hendleBasketShow}
      >
        close
      </i>
    </ul>
  );
};

export default BasketList;
