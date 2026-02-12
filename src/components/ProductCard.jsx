import "../App.css";

export default function ProductCard({ product }) {
  const addFav = () => {
    const fav = JSON.parse(localStorage.getItem("fav")) || [];
    fav.push(product);
    localStorage.setItem("fav", JSON.stringify(fav));
    alert("Added to favorites");
  };

  return (
    <div className="card" style={{ position: "relative" }}>
      {/* Favorite Icon */}
      <button
        onClick={addFav}
        style={{
          position: "absolute",
          top: 10,
          right: 10,
          background: "white",
          border: "none",
          cursor: "pointer",
          fontSize: "20px",
        }}
      >
        ❤️
      </button>

      <img src={product.image} alt="" />

      <h4>{product.title}</h4>

      <p className="price">₹ {product.price}</p>
      <p>⭐ {product.rating.rate}</p>
    </div>
  );
}
