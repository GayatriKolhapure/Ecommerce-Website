
import dayjs from 'dayjs';
import convertCents from '../../utils/convertCents';
import axios from 'axios';

function DeliveryOption({ cartItem, deliveryOption, loadCart, getPaymentSummary }) {

  const updateDeliveryOption = async () => {
    await axios.put(`/api/cart-items/${cartItem.productId}`, {
      deliveryOptionId: deliveryOption.id
    });
    await loadCart();
    await getPaymentSummary();
  }


  return (
    <div className="delivery-option"
      key={deliveryOption.id}
      onClick={updateDeliveryOption}
    >
      <input type="radio"
        checked={cartItem.deliveryOptionId === deliveryOption.id}
        onChange={() => { }}
        className="delivery-option-input"
        name={`delivery-option-${cartItem.id}`} />
      <div>
        <div className="delivery-option-date">
          {/* Tuesday, June 21 */}
          {dayjs(deliveryOption.estimatedDeliveryTimeMs).format("dddd, MMMM DD")}
        </div>
        <div className="delivery-option-price">
          {deliveryOption.priceCents === 0 ? "Free Shipping" : convertCents(deliveryOption.priceCents)}
        </div>
      </div>
    </div>
  )
}

export default DeliveryOption;