import { BrowserRouter, Route, Routes } from "react-router-dom";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import 'react-toastify/dist/ReactToastify.css'
import Navbar from "./components/Navbar";
import Gallery from "./components/Gallery";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Shop from "./pages/Shop";
import Adress from "./pages/Adress";
import Slider from "./components/Sidebar";
import NoPage from "./pages/NoPage";
import ProductDetail from "./components/ProductDetail";
import Login from './pages/Login'
import Register from "./pages/Register";
import { useState } from "react";
import { ToastContainer } from "react-toastify";

function App() {
  const [token, setToken] = useState(window.localStorage.getItem('token'));
  console.log(token);

  return (
    <div className="App overflow-hidden ">
      <ToastContainer></ToastContainer>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={ token ? <Home /> : <Login setToken={setToken} /> } />
          
          <Route path="login" element={<Login setToken={setToken} />} />
          <Route path="shop" element={<Shop />} />
          <Route path="contact" element={<Adress />} />
          <Route path="gallery" element={<Gallery />} />
          <Route path="/product/:id" element={<ProductDetail />} />
          <Route path="register" element={<Register/>} />
          <Route path="*" element={<NoPage />} />
        </Routes>
        <Footer />
        <Slider />
      </BrowserRouter>
    </div>
  );
}

export default App;
