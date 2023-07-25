import { Routes, Route } from "react-router-dom";
import HomePage from "./Pages/HomePage";
import ProductsPage from "./Pages/ProductsPage";
import Collection from "./Components/Collection";
import ContactPage from "./Pages/ContactPage";
import CartPage from "./Pages/CartPage";
import "./App.css";
import { ShopContextProvider } from "./Context/shop-context";
function App() {
  return (
    <div className="App">
      <ShopContextProvider>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/products" element={<ProductsPage />} />
          <Route path="/Collection" element={<Collection />} />
          <Route path="/about" element={<ContactPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/cart" element={<CartPage />} />
        </Routes>
      </ShopContextProvider>
    </div>
  );
}

export default App;
