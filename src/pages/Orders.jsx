import { useContext, useEffect } from "react";
import OrdersList from "../components/orders/OrdersList";
import Spinner from "../components/shared/spinner/Spinner";
import OrderContext from "../context/order/OrderContext";

function Orders() {
  const { orders, loading, fetchOrders } = useContext(OrderContext);

  useEffect(() => {
    fetchOrders();
  }, []);

  console.log(orders);

  if (loading) {
    return <Spinner />;
  } else {
    return (
      <>
        <h1>Commandes</h1>
        <OrdersList orders={orders}/>
      </>
    );
  }
}

export default Orders;
