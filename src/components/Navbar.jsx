import { Link } from "react-router-dom";
import "../App.css";

export default function Navbar() {
  return (
    <div className="navbar">
      <h2>ProductApp</h2>

      <div>
        <Link to="/">Home</Link>
        <Link to="/favorites">Favorites</Link>
        <Link to="/login">Login</Link>
      </div>
    </div>
  );
}
