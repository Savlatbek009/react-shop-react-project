import React from "react";
import GoodItem from "./GoodItem";

const GoodList = (props) => {
  const { goods = [], addToBasket } = props;
  return (
    <div className="goods">
      {goods.map((item) => (
        <GoodItem key={item.id} {...item} addToBasket={addToBasket} />
      ))}
    </div>
  );
};

export default GoodList;
