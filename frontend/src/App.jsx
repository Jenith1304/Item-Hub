import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import AddItem from './pages/AddItem';
import ViewItems from './pages/ViewItems';

function App() {
  return (
    <Router>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark shadow">
        <div className="container">
          <a className="navbar-brand fw-bold" href="#">ItemVault</a>
          <div>
            <Link to="/" className="btn btn-outline-light me-2">View Items</Link>
            <Link to="/add" className="btn btn-outline-success">Add Item</Link>
          </div>
        </div>
      </nav>
      <Routes>
        <Route path="/" element={<ViewItems />} />
        <Route path="/add" element={<AddItem />} />
      </Routes>
    </Router>

  );
}

export default App;
