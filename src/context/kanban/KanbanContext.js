import { createContext, useReducer, useContext } from "react";
import axios from "axios";
import kanbanReducer from "./KanbanReducer";
const KanbanContext = createContext();

export const KanbanProvider = ({ children }) => {
  const initialState = {
    kanbans: [],
    kanban: {},
    loading: false,
  };

  const [state, dispatch] = useReducer(kanbanReducer, initialState);

  const fetchKanbans = async () => {
    setLoading();
    const response = await fetch("http://localhost:5058/api/v1/kanbans");
    const data = await response.json();
    dispatch({
      type: "GET_KANBANS",
      payload: data.data,
    });
  };


  const addKanban = async(newKanban) => {
    axios.post("http://localhost:5058/api/v1/kanbans", newKanban)
    setTimeout(() => {
        window.location.reload()
    }, 2000);
  }


  const setLoading = () => dispatch({ type: "SET_LOADING" });

  return (
    <KanbanContext.Provider
      value={{
        kanbans: state.kanbans,
        loading: state.loading,
        fetchKanbans,
        addKanban,
      }}
    >
      {children}
    </KanbanContext.Provider>
  );
};


export default KanbanContext