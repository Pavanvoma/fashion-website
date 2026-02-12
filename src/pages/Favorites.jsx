export default function Favorites() {
  const fav = JSON.parse(localStorage.getItem("fav")) || [];

  return (
    <div className="grid">
      {fav.map(p => (
        <div key={p.id} className="card">
          <img src={p.image} height={120} />
          <h4>{p.title}</h4>
        </div>
      ))}
    </div>
  );
}
