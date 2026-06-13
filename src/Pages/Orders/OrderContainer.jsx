import OrderHeader from "./OrderHeader";
import OrderDetailGrid from "./OrderDetailGrid"

function OrderContainer({ orders }) {
  return (
    <>
      {orders.map(order => {
        return(
        <div className="order-container" key = {order.id}>
          <OrderHeader 
          order={order}
          />
          <div className="order-details-grid">
          <OrderDetailGrid 
          order={order}/>
          </div>
        </div>)
      })}
    </>
  )
}

export default OrderContainer;