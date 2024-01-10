
import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage"
import ShopPage from "./pages/ShopPage"
import ContactPage from "./pages/ContactPage"
import CartPage from "./pages/CartPage";
import AuthPage from "./pages/AuthPage";
import ProductDetailsPage from "./pages/ProductDetailsPage";
import "./App.css";



function App() {
  return (
    <Routes>
      <Route path="/" element={< HomePage />} />
      <Route path="/shop" element={<ShopPage />} />
      <Route path="/contact" element={<ContactPage />} />
      <Route path="/cart" element={<CartPage />} />
      <Route path="/auth" element={<AuthPage />} />
      <Route path="/product/:id" element={<ProductDetailsPage />} />
    </Routes>
  );
}

export default App;
