import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "../store/productSlice";
import ProductCard from "../components/ProductCard";

export default function Home() {
  const dispatch = useDispatch();

  const { items, loading, error } = useSelector(
    (s) => s.products
  );

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  if (loading) return <h2>Loading products...</h2>;

  if (error) return <h2>{error}</h2>;

  return (
    <div
      style={{
        padding: 20,
        display: "grid",
        gap: 20,
        gridTemplateColumns:
          "repeat(auto-fill, minmax(200px, 1fr))",
      }}
    >
      {items.map((p) => (
        <ProductCard key={p.id} product={p} />
      ))}
    </div>
  );
}
