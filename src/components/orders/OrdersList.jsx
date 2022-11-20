import OrdersItem from "./ordersItem/OrdersItem"


function OrdersList({orders}) {
  return (
    <div classname="container_flex">

{orders.map((order) => (
        <OrdersItem key={order._id} order={order} />
        ))}
    </div>
  )
}

export default OrdersList