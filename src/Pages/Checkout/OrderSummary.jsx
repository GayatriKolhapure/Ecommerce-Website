import CartItem from './CartItem';

function OrderSummary({cart,deliveryOptions,loadCart,getPaymentSummary}) {

  return (
    <div className="order-summary">
      {cart.map(cartItem => {
        const matchingDeliveryOption =
          deliveryOptions?.
            find(deliveryOption => cartItem.deliveryOptionId === deliveryOption.id);

        return (
          <div className="cart-item-container" key={cartItem?.id}>
              <CartItem 
              matchingDeliveryOption={matchingDeliveryOption}
              cartItem={cartItem}
              deliveryOptions={deliveryOptions}
              loadCart={loadCart}
              getPaymentSummary={getPaymentSummary}
              />
          </div>)
      })}

    </div>
  )
}

export default OrderSummary;