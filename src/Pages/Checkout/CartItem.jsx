import dayjs from 'dayjs';
import convertCents from '../../utils/convertCents';
import axios from 'axios';
import DeliveryOptions from "./DeliveryOptions";

function CartItem({matchingDeliveryOption,cartItem,deliveryOptions,loadCart,getPaymentSummary}) {

    async function deleteCartItems(){
    await axios.delete(`/api/cart-items/${cartItem.productId}`);
  }

  return (
    <>
      <div className="delivery-date">
        Delivery date: {matchingDeliveryOption &&
          dayjs(matchingDeliveryOption.estimatedDeliveryTimeMs)
            .format("DD MMMM")}
      </div>

      <div className="cart-item-details-grid">
        <img className="product-image"
          src={cartItem.product?.image} />

        <div className="cart-item-details">
          <div className="product-name">
            {cartItem.product?.name}
          </div>
          <div className="product-price">
            {convertCents(cartItem.product?.priceCents)}
          </div>
          <div className="product-quantity">
            <span>
              Quantity: <span className="quantity-label">{cartItem?.quantity}</span>
            </span>
            <span className="update-quantity-link link-primary">
              Update
            </span>
            <span className="delete-quantity-link link-primary"
              onClick={deleteCartItems}
            >
              Delete
            </span>
          </div>
        </div>
        <DeliveryOptions
          cartItem={cartItem}
          deliveryOptions={deliveryOptions}
          loadCart={loadCart}
          getPaymentSummary={getPaymentSummary}
        />
      </div>
    </>
  )
}

export default CartItem;