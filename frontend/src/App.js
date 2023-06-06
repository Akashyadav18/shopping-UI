import "./styles/app.scss";
import "react-toastify/dist/ReactToastify.css";
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import {ToastContainer} from "react-toastify";
import Header from "./components/Header";
import Home from "./components/Home";
import Product from "./components/Product";
import Cart from "./components/Cart";
import Like from "./components/Like";
import PageNotFound from "./components/PageNotFound";
import Shop from "./components/Shop";
import ShopDetails from "./components/ShopDetails";

function App() {
  return (
    <div className="App">
      <Router>
      <ToastContainer/>
      <Header/>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/product" element={<Product/>} />
          <Route path="/products" element={<Shop/>} />
          <Route path="/products/:id" element={<ShopDetails/>} />
          <Route path="/cart" element={<Cart/>} />
          <Route path="/like" element={<Like/>} />
          <Route path="*" element={<PageNotFound/>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
