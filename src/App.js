import './App.css';
import { useState } from 'react';
import OrderPanel from './components/OrderPanel';
import menuData from './data/menuData';
import TotalPanel from './components/TotalPanel';

function App() {
  const [order, setOrder] = useState(menuData);

  const increaseQuantity = (item) => {
    const newOrder = order.map((orderItem) => {
      if (orderItem.name === item.name) {
        return { ...orderItem, quantity: orderItem.quantity + 1 };
      }
      return orderItem;
    });
    setOrder(newOrder);
  };
  return (
    <div className="App">
      <div className="container">
        <OrderPanel order={order} setOrder={increaseQuantity} />
        <TotalPanel order={order} />
      </div>
    </div>
  );
}

export default App;
