import { Link } from "react-router-dom";
import "../App.css";

export default function ProductCard({ product }) {
  return (
    <div className="card">
      {/* Clickable image */}
      <Link to={`/product/${product.id}`}>
        <img
          src={product.image}
          alt={product.title}
        />
      </Link>

      {/* Title */}
      <h4>{product.title}</h4>

      {/* Price */}
      <p className="price">${product.price}</p>

      {/* Button */}
      <Link to={`/product/${product.id}`}>
        <button className="view-btn">
          View Details
        </button>
      </Link>
    </div>
  );
}
