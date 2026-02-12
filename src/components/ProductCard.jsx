import { useDispatch, useSelector } from "react-redux";
import { toggleFavorite } from "../store/productSlice";

export default function ProductCard({ product }) {
  const dispatch = useDispatch();
  const favorites = useSelector(
    (s) => s.products.favorites
  );

  const isFav = favorites.includes(product.id);

  return (
    <div className="card">
      <img src={product.image} alt={product.title} />

      <h4>{product.title}</h4>
      <p>₹{product.price}</p>

      <button
        className="fav-btn"
        onClick={() =>
          dispatch(toggleFavorite(product.id))
        }
      >
        {isFav ? "❤️ Saved" : "🤍 Favorite"}
      </button>
    </div>
  );
}
