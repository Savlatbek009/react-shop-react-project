import React, { useState, useEffect } from "react";
import { API_KEY, API_URL } from "../config";
import Loader from "./Loader";
import GoodList from "./GoodList";
import Cart from "./Cart";
import BasketList from "./BasketList";

const Main = () => {
  const [goods, setGoods] = useState([]);
  const [loading, setLoading] = useState(true);
  const [order, setOrder] = useState([]);
  const [isBasketShow, setBasketShow] = useState(false);
  const addToBasket = (item) => {
    const itemIdx = order.findIndex((orderItem) => orderItem.id === item.id);

    if (itemIdx < 0) {
      const newItem = {
        ...item,
        quantity: 1,
      };
      setOrder([...order, newItem]);
    } else {
      const newOrder = order.map((orderItem, idx) => {
        if (idx === itemIdx) {
          return {
            ...orderItem,
            quantity: orderItem.quantity + 1,
          };
        } else {
          return item;
        }
      });
      setOrder(newOrder);
    }
  };
  const hendleBasketShow = () => {
    setBasketShow(!isBasketShow);
  };
  const removeFromBasket = (itemID) => {
    const newOrder = order.filter((item) => item.id !== itemID);
    setOrder(newOrder);
  };
  useEffect(() => {
    fetch(API_URL, { headers: { Authorization: API_KEY } })
      .then((reponse) => reponse.json())
      .then((data) => {
        data.featured && setGoods(data.featured);
        setLoading(false);
      });
  }, []);

  return (
    <div className="main p-3 container">
      <div
        className="d-flex"
        style={{
          justifyContent: "end",
          margin: "10px",
          position: "fixed",
          top: "4rem",
          zIndex: "5",
          right: "0",
        }}
      >
        <Cart hendleBasketShow={hendleBasketShow} quantity={order.length} />
      </div>
      {loading ? (
        <Loader />
      ) : (
        <GoodList goods={goods} addToBasket={addToBasket} />
      )}
      {isBasketShow && (
        <BasketList
          removeFromBasket={removeFromBasket}
          hendleBasketShow={hendleBasketShow}
          order={order}
        />
      )}
    </div>
  );
};

export default Main;
