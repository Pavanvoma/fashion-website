import { useSelector } from "react-redux";
import ProductCard from "../components/ProductCard";

export default function Favorites() {
  const { items, favorites } = useSelector(
    (state) => state.products
  );

  /* Filter favorite products */
  const favProducts = items.filter((product) =>
    favorites.includes(product.id)
  );

  /* Empty wishlist */
  if (favProducts.length === 0) {
    return (
      <div className="empty-fav">
        <h2>Your Wishlist is Waiting ❤️</h2>

        <p>
          Start adding products you love!
          <br />
          Save your favorite items and
          enjoy shopping anytime.
        </p>
      </div>
    );
  }

  /* Wishlist products */
  return (
    <div className="products">
      {favProducts.map((product) => (
        <ProductCard
          key={product.id}
          product={product}
        />
      ))}
    </div>
  );
}
