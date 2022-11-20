import { createContext, useReducer, useContext } from "react";
import axios from "axios";
import OrderReducer from "./OrderReducer";
const OrderContext = createContext();

export const OrderProvider = ({ children }) => {
  const initialState = {
    orders: [],
    order: {},
    loading: false,
  };

  const [state, dispatch] = useReducer(OrderReducer, initialState);

  const fetchOrders = async () => {
    setLoading();
    const response = await fetch("http://localhost:5058/api/v1/orders");
    const data = await response.json();
    dispatch({
      type: "GET_ORDERS",
      payload: data.data,
    });
  };


  const addOrder = async(newOrder) => {
    axios.post("http://localhost:5058/api/v1/orders", newOrder)
    setTimeout(() => {
        window.location.reload()
    }, 2000);
  }


  const setLoading = () => dispatch({ type: "SET_LOADING" });

  return (
    <OrderContext.Provider
      value={{
        orders: state.orders,
        loading: state.loading,
        fetchOrders,
        addOrder,
      }}
    >
      {children}
    </OrderContext.Provider>
  );
};


export default OrderContext