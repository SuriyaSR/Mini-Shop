import { Route, Routes } from "react-router-dom"
import './App.css'
import Home from "./pages/home/Home"
import ProductDetails from "./pages/product/ProductDetails"
function App() {

  return (
    <Routes>
     <Route path="/" element={<Home />} />
     <Route path="/product/:id" element={<ProductDetails />} />
    </Routes>
  )
}

export default App
