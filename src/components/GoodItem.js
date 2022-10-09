import React from "react";

const GoodItem = (props) => {
  const { id, name, description, price, full_background, addToBasket } = props;

  return (
    <div className="card  p-1" id={id}>
      <img className="card-img-top" src={full_background} alt={name} />
      <div className="card-content p-2">
        <p>{description}</p>
      </div>
      <hr />
      <div
        className="card-action d-flex p-3"
        style={{ justifyContent: "space-between" }}
      >
        <button
          className="btn btn-primary"
          onClick={() => addToBasket({ id, name, price })}
        >
          Buy
        </button>
        <span className="price">{price}$</span>
      </div>
    </div>
  );
};

export default GoodItem;
