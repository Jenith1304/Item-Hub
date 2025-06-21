import React, { useState } from 'react';
import api from '../services/api';

function AddItem() {
  const [formData, setFormData] = useState({ name: '', type: '', description: '' });
  const [coverImage, setCoverImage] = useState(null);
  const [additionalImages, setAdditionalImages] = useState([]);
  const [success, setSuccess] = useState('');

  const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = new FormData();
    Object.entries(formData).forEach(([key, value]) => data.append(key, value));
    data.append('coverImage', coverImage);
    Array.from(additionalImages).forEach(file => data.append('additionalImages', file));

    const res = await api.post('/items', data);
    if (res.data.message) {
      setSuccess(res.data.message);
      e.target.reset(); // Reset form visually
    }
  };

  return (
    <div className="container mt-4">
      <h2 className="mb-4">Add Item</h2>

      {success && <div className="alert alert-success">{success}</div>}

      <form onSubmit={handleSubmit} className="p-4 border rounded shadow bg-dark text-light">
        <div className="mb-3">
          <label className="form-label">Item Name</label>
          <input className="form-control bg-dark text-light border-secondary"  name="name"  onChange={handleChange} required />
        </div>

        <div className="mb-3">
          <label className="form-label">Item Type</label>
          <input name="type" className="form-control bg-dark text-light border-secondary"  onChange={handleChange} required />
        </div>

        <div className="mb-3">
          <label className="form-label">Item Description</label>
          <textarea name="description" className="form-control bg-dark text-light border-secondary" rows="3" onChange={handleChange}></textarea>
        </div>

        <div className="mb-3">
          <label className="form-label">Cover Image</label>
          <input type="file"className="form-control bg-dark text-light border-secondary"  onChange={e => setCoverImage(e.target.files[0])} required />
        </div>

        <div className="mb-3">
          <label className="form-label">Additional Images</label>
          <input type="file" multiple className="form-control bg-dark text-light border-secondary"  onChange={e => setAdditionalImages(e.target.files)} />
        </div>

        <button type="submit" className="btn btn-primary">Submit</button>
      </form>
    </div>
  );
}

export default AddItem;
