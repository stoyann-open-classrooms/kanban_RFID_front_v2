import './styles/ordersItems.css'

function OrdersItem({order}) {
  return (
    <article className='orders_items'>
        <div className="badge_orders">J+ {order.orderDays}</div>
        <h3>{order.orderNumber}</h3>
        <p> refference : <strong>{order.product.refference}</strong> </p>
        <p>En commande: <strong>{order.quantity}</strong> </p>
        <p>Status: <strong>{order.status}</strong> </p>
        <button>Détails</button>
    </article>
  )
}

export default OrdersItem