
import DeliveryOption from "./DeliveryOption"

function DeliveryOptions({cartItem,deliveryOptions,loadCart,getPaymentSummary}) {
  return (
    <div className="delivery-options">
      <div className="delivery-options-title">
        Choose a delivery option:
      </div>
      {deliveryOptions.map(deliveryOption =>
        <DeliveryOption 
        key = {deliveryOption.id}
        cartItem = {cartItem}
        deliveryOption = {deliveryOption}
        loadCart={loadCart}
        getPaymentSummary={getPaymentSummary}
        />
      )}
    </div>
  )
}

export default DeliveryOptions;