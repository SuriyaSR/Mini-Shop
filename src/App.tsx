import { Route, Routes } from "react-router-dom"
import './App.css'
import Home from "./pages/home/Home"
import ProductDetails from "./pages/product/ProductDetails"
import AppLayout from "./components/layout/AppLayout"
import CartPage from "./pages/cart/CartPage"
import WishlistPage from "./pages/wishlist/WishlistPage"

function App() { 

  return (
    <Routes>
     <Route element={<AppLayout />} > 
        <Route path="/" element={<Home /> } />
        <Route path="/product/:id" element={<ProductDetails />} />
        <Route path="/cart" element={<CartPage />} />
        <Route path="/wishlist" element={<WishlistPage />} />
      </Route>
      {/* Login page WITHOUT navbar */}
      {/* <Route path="/login" element={<Login />} /> */}
    </Routes>
  )
}

export default App
