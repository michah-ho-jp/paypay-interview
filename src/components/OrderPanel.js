import React from "react";
import MenuButton from "./MenuButton";

const OrderPanel = ({ order, setOrder }) => {
  return (
    <ul className="order-panel">
      {order.map((item, index) => (
        <li key={index}>
          <MenuButton item={item} setOrder={setOrder} />
        </li>
      ))}
    </ul>
  );
}

export default OrderPanel;