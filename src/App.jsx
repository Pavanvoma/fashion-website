import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useSelector } from "react-redux";

import Login from "./pages/Login";
import Favorites from "./pages/Favorites";
import ProductDetails from "./pages/ProductDetails";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";

function App() {
  /* Get theme from Redux */
  const theme = useSelector((state) => state.theme.mode);

  return (
    <div className={theme}>
      <BrowserRouter>
        <Navbar />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/favorites" element={<Favorites />} />
          <Route path="/product/:id" element={<ProductDetails />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
