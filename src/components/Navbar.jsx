import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { toggleTheme } from "../store/themeSlice";
import "../App.css";

export default function Navbar() {
  const dispatch = useDispatch();
  const theme = useSelector((s) => s.theme.mode);

  return (
    <nav className="navbar">
      <div className="logo">🛍 ShopEase</div>

      <div className="nav-links">
        <Link to="/">Home</Link>
        <Link to="/favorites">Wishlist</Link>
        <Link to="/login">Login</Link>

        <button
          className="theme-btn"
          onClick={() => dispatch(toggleTheme())}
        >
          {theme === "light" ? "🌙" : "☀️"}
        </button>
      </div>
    </nav>
  );
}
