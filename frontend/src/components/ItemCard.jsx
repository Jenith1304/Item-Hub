function ItemCard({ item, onClick }) {
  return (
    <div className="card h-100 bg-dark text-white shadow-sm" onClick={onClick} style={{ cursor: 'pointer' }}>
    <img
      src={`http://localhost:5000/uploads/${item.coverImage}`}
      className="card-img-top"
      alt={item.name}
    />
    <div className="card-body">
      <h5 className="card-title text-center">{item.name}</h5>
    </div>
  </div>
  
  );
}

export default ItemCard;
