import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Footer from "./components/layout/Footer";
import Navbar from "./components/layout/navbar/Navbar";
import { ProductProvider } from "./context/product/ProductContext";
import { KanbanProvider } from "./context/kanban/KanbanContext";
import { RequestProvider } from "./context/request/RequestContext";
import { OrderProvider } from "./context/order/OrderContext";
import { AlertProvider } from "./context/alert/AlertContext";
import Home from "./pages/Home";
import Kanbans from "./pages/Kanbans";
import Orders from "./pages/Orders";
import Product from "./pages/Product";
import Products from "./pages/Products";
import Requests from "./pages/Requests";
import Alert from "./components/shared/alert/Alert";
import {SearchProvider} from "./context/search/SearchContext";
import Kanban from "./pages/Kanban";
function App() {
  return (
    <AlertProvider>
      <SearchProvider>
      <ProductProvider>
        <KanbanProvider>
          <RequestProvider>
            <OrderProvider>

            <Router>
              <div>
                <Navbar />
                <main>
                  <Alert />
                  <Routes>
                    <Route path="/" element={<Home />}></Route>
                    <Route path="/kanbans" element={<Kanbans />} />
                    <Route path="/kanbans/:id" element={<Kanban />} />
                    <Route path="/products" element={<Products />} />
                    <Route path="/orders" element={<Orders />} />
                    <Route path="/requests" element={<Requests />} />
                    <Route path="/products/:id" element={<Product />} />
                  </Routes>
                </main>
              </div>
              <Footer />
            </Router>
            </OrderProvider>
          </RequestProvider>
        </KanbanProvider>
      </ProductProvider>
      </SearchProvider>
    </AlertProvider>
  );
}

export default App;
