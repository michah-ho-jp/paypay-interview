import React from "react";

const MenuButton = ({ item, setOrder }) => {
  const handleClick = (item) => {
    setOrder(item);
  }
  return (
    <>
      <button id={item.id} className="menu-button" onClick={() => handleClick(item)}>
        {item.name}
        <span className="price">{item.price}円</span>
        <div className="quantity" id={item.countId}>{item.quantity}</div>
      </button>
    </>
  );
};

export default MenuButton;