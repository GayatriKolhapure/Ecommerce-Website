import HomePage from './Pages/HomePage/HomePage'
import Checkout from './Pages/Checkout/Checkout'
import Orders from './Pages/Orders/Orders'
import Tracking from './Pages/Tracking'
import { Routes, Route } from "react-router"
import axios from 'axios';
import { useState, useEffect } from 'react';
import './App.css'

function App() {
  const [cart, setCart] = useState([]);


  const loadCart = async () => {
    const response = await axios.get('/api/cart-items?expand=product');
    setCart(response.data);
  }

  useEffect(() => {
    loadCart();
  }, [cart]);


  return (
    <>
      <Routes>
        {/* <Route path = "/" element = {<HomePage />} /> */}
        <Route index element={<HomePage
          cart={cart}
          loadCart = {loadCart}
        />} />
        <Route path="/checkout" element={<Checkout
          cart={cart}
          loadCart={loadCart}
        />} />
        <Route path="/orders" element={<Orders
          cart={cart}
        />} />
        <Route path="/tracking" element={<Tracking
          cart={cart}
        />} />
      </Routes>

    </>
  )
}

export default App
