import { createContext, useReducer, useContext } from "react";
import axios from "axios";
import RequestReducer from "./RequestReducer";
const RequestContext = createContext();

export const RequestProvider = ({ children }) => {
  const initialState = {
    requests: [],
    request: {},
    loading: false,
  };

  const [state, dispatch] = useReducer(RequestReducer, initialState);

  const fetchRequests = async () => {
    setLoading();
    const response = await fetch("http://localhost:5058/api/v1/requests");
    const data = await response.json();
    dispatch({
      type: "GET_REQUESTS",
      payload: data.data,
    });
  };


  const addRequest = async(newRequest) => {
    axios.post("http://localhost:5058/api/v1/requests", newRequest)
    setTimeout(() => {
        window.location.reload()
    }, 2000);
  }


  const setLoading = () => dispatch({ type: "SET_LOADING" });

  return (
    <RequestContext.Provider
      value={{
        requests: state.requests,
        loading: state.loading,
        fetchRequests,
        addRequest,
      }}
    >
      {children}
    </RequestContext.Provider>
  );
};


export default RequestContext