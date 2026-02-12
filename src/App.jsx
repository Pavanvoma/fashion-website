import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Favorites from "./pages/Favorites";
import ProductDetails from "./pages/ProductDetails";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";

function App() {
  return (
    <BrowserRouter>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/favorites" element={<Favorites />} />
        <Route path="/product/:id" element={<ProductDetails />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
