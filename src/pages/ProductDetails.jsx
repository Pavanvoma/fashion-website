import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { toggleFavorite } from "../store/productSlice";

export default function ProductDetails() {
  const { id } = useParams();
  const dispatch = useDispatch();

  const { items, favorites } = useSelector(
    (s) => s.products
  );

  const product = items.find(
    (p) => p.id === Number(id)
  );

  if (!product) return <h2>Product not found</h2>;

  const isFav = favorites.includes(product.id);

  return (
    <div
      style={{
        padding: 20,
        maxWidth: 900,
        margin: "auto",
        display: "flex",
        gap: 30,
        flexWrap: "wrap",
      }}
    >
      {/* Image */}
      <img
        src={product.image}
        alt={product.title}
        style={{
          width: 300,
          height: 300,
          objectFit: "contain",
        }}
      />

      {/* Details */}
      <div style={{ flex: 1 }}>
        <h2>{product.title}</h2>

        <h3 style={{ color: "green" }}>
          ${product.price}
        </h3>

        <p>
          ⭐ Rating: {product.rating?.rate} (
          {product.rating?.count} reviews)
        </p>

        <p>{product.description}</p>

        <button
          onClick={() =>
            dispatch(toggleFavorite(product.id))
          }
          style={{
            marginTop: 15,
            padding: "10px 20px",
            background: isFav ? "red" : "#007bff",
            color: "#fff",
            border: "none",
            cursor: "pointer",
            borderRadius: 6,
          }}
        >
          {isFav
            ? "Remove from Favorites"
            : "Add to Favorites"}
        </button>
      </div>
    </div>
  );
}
