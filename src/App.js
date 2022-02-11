import HomePage from "./pages/home";
import './App.css';
import ProductsPage from "./pages/products";
import { Route, Routes } from "react-router-dom";
import LoginPage from "./pages/login";
import RegisterPage from "./pages/register";
import ForgotPassword from "./pages/forgot";
import ProductDetails from "./pages/product-details";

const App = () => {

  return (
    <Routes>
      <Route path='/' element={<HomePage />} />
      <Route path='/login' element={<LoginPage />} />
      <Route path='/forgot' element={<ForgotPassword />} />
      <Route path='/register' element={<RegisterPage />} />
      <Route path='/category/:slug' element={<ProductsPage />} />
      <Route path='/product/:slug' element={<ProductDetails />} />
    </Routes>
  )


}

export default App;