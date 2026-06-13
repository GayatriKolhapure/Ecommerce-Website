import Header from "../../Components/Header"
import './orders.css'
import { useState, useEffect } from 'react';
import axios from 'axios';
import OrderContainer from './OrderContainer'

function Orders({ cart }) {


  const [orders, setOrders] = useState([]);

  const getOrders = async () => {
    const response = await axios.get("/api/orders?expand=products");
    setOrders(response.data);
  }

  useEffect(() => {
    getOrders();
  }, []);

  return (
    <>
      <title>Orders</title>
      <link rel="icon" type="image/svg+xml" to="images/orders-favicon.png" />

      <Header
        cart={cart}
      />
      <div className="orders-page">
        <div className="page-title">Your Orders</div>

        <div className="orders-grid">
            <OrderContainer 
            orders={orders}/>
        </div>
      </div>
    </>
  )
}

export default Orders;