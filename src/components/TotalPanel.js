import React from "react";

const TotalPanel = ({ order }) => {
  const total = order.reduce((acc, item) => {
    return acc + item.price * item.quantity;
  }, 0);
  const totalQuantity = order.reduce((acc, item) => {
    return acc + item.quantity;
  }, 0);

  return (
    <div className="total-panel">
      <h3>合計</h3>
      <span id="count">商品数：{totalQuantity}個</span>
      <span id="price">合計金額: {total}円</span>
    </div>
  );
}

export default TotalPanel;