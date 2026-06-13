import './checkout.css'
import CheckoutHeader from "./CheckoutHeader";
import { useEffect, useState } from 'react';
import axios from 'axios';
import PaymentSummary from './PaymentSummary'
import OrderSummary from './OrderSummary'

function Checkout({ cart,loadCart }) {

  const [deliveryOptions, setDeliveryOptions] = useState([]);
  const [paymentSummary, setPaymnetSummary] = useState(null);

  const getPaymentSummary = async () => {
    const response = await axios.get("/api/payment-summary")
    setPaymnetSummary(response.data);
  }

  useEffect(() => {
    getPaymentSummary();
  }, []);

  const getDeliveryOptions = async () => {
    const response = await axios.get("/api/delivery-options?expand=estimatedDeliveryTime");
    setDeliveryOptions(response.data);
  }

  useEffect(() => {
    getDeliveryOptions();
  }, []);

  return (
    <>
      <title>Checkout</title>
      <link rel="icon" type="image/svg+xml" to="images/cart-favicon.png" />
      <CheckoutHeader
        cart={cart}
      />
      <div className="checkout-page">
        <div className="page-title">Review your order</div>

        <div className="checkout-grid">
          <OrderSummary 
          cart={cart}
          deliveryOptions={deliveryOptions}
          loadCart = {loadCart}
          getPaymentSummary={getPaymentSummary}
          />
          <PaymentSummary 
          paymentSummary = {paymentSummary}
          getPaymentSummary={getPaymentSummary}
          />
        </div>
      </div>
    </>
  )
}

export default Checkout;