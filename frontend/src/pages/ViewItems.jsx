import React, { useEffect, useState } from 'react';
import api from '../services/api';
import ItemCard from '../components/ItemCard';
import ItemModal from '../components/ItemModal';

function ViewItems() {
  const [items, setItems] = useState([]);
  const [selectedItem, setSelectedItem] = useState(null);

  useEffect(() => {
    api.get('/items').then(res => setItems(res.data));
  }, []);

  return (
    <div className="container mt-4">
      <h2 className="mb-4">View Items</h2>

      {items.length === 0 ? (
        <div className="alert alert-info">No items available. Please add some items.</div>
      ) : (
        <div className="row">
          {items.map(item => (
            <div key={item._id} className="col-md-4 mb-4">
              <ItemCard item={item} onClick={() => setSelectedItem(item)} />
            </div>
          ))}
        </div>
      )}

      {selectedItem && (
        <ItemModal item={selectedItem} onClose={() => setSelectedItem(null)} />
      )}
    </div>
  );
}

export default ViewItems;
