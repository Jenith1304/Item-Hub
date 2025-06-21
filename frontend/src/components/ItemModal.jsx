import React from 'react';
import api from '../services/api';

function ItemModal({ item, onClose }) {
  const handleEnquire = () => {
    api.post('/enquire', { itemId: item._id, itemName: item.name });
    alert('Enquiry sent!');
  };

  return (
    <div
      className="modal fade show"
      style={{ display: 'block', backgroundColor: 'rgba(0,0,0,0.5)' }}
      tabIndex="-1"
      onClick={onClose}
    >
      <div
        className="modal-dialog modal-lg modal-dialog-centered"
        onClick={(e) => e.stopPropagation()} // Prevent closing when clicking inside modal
      >
        <div className="modal-content bg-dark text-white">
          <div className="modal-header">
            <h5 className="modal-title">{item.name}</h5>
            <button type="button" className="btn-close btn-close-white" onClick={onClose}></button>
          </div>

          <div className="modal-body">
            <p>{item.description}</p>

            <div id="carouselImages" className="carousel slide" data-bs-ride="carousel">
              <div className="carousel-inner">
                {[item.coverImage, ...item.additionalImages].map((img, index) => (
                  <div className={`carousel-item ${index === 0 ? 'active' : ''}`} key={index}>
                    <img
                      src={`http://localhost:5000/uploads/${img}`}
                      className="d-block w-100"
                      alt={`img-${index}`}
                      style={{ maxHeight: '400px', objectFit: 'contain' }}
                    />
                  </div>
                ))}
              </div>
              <button
                className="carousel-control-prev"
                type="button"
                data-bs-target="#carouselImages"
                data-bs-slide="prev"
              >
                <span className="carousel-control-prev-icon" />
              </button>
              <button
                className="carousel-control-next"
                type="button"
                data-bs-target="#carouselImages"
                data-bs-slide="next"
              >
                <span className="carousel-control-next-icon" />
              </button>
            </div>
          </div>

          <div className="modal-footer">
            <button className="btn btn-secondary" onClick={onClose}>Close</button>
            <button className="btn btn-primary" onClick={handleEnquire}>Enquire</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ItemModal;
