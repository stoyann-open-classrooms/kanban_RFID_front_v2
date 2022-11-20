import { createContext, useReducer, useContext } from "react";
import axios from "axios";
import productReducer from "./ProductReducer";
const ProductContext = createContext();

export const ProductProvider = ({ children }) => {
  const initialState = {
    products: [],
    product: {},
    loading: false,
  };

  const [state, dispatch] = useReducer(productReducer, initialState);

  const fetchProducts = async () => {
    setLoading();
    const response = await fetch("http://localhost:5058/api/v1/products");
    const data = await response.json();
    dispatch({
      type: "GET_PRODUCTS",
      payload: data.data,
    });
  };

  const getProduct = async (id) => {
    const response = await fetch(`http://localhost:5058/api/v1/products/${id}`)
    const data = await response.json()
    dispatch({
      type: 'GET_PRODUCT',
      payload: data,
    })
  }


  const addProduct = async(newProduct) => {
    axios.post("http://localhost:5058/api/v1/products", newProduct)
    setTimeout(() => {
        window.location.reload()
    }, 2000);
  }


  const setLoading = () => dispatch({ type: "SET_LOADING" });

  return (
    <ProductContext.Provider
      value={{
        products: state.products,
        loading: state.loading,
        fetchProducts,
        addProduct,
        getProduct,
      }}
    >
      {children}
    </ProductContext.Provider>
  );
};


export default ProductContext