import React from 'react';
import { BrowserRouter as Router, Link, Routes, Route } from 'react-router-dom'; // Import Router và Routes

import Cart from './components/Cart';
import Header from './components/Header';
import Product from './components/Product';

function App() {
  return (
    <Router>
      <div className="container">
        <Header />
        {/* Bọc tất cả các Route trong thành phần Routes */}
        <Routes>
          <Route path="/" element={<Product />} /> {/* Sử dụng element thay vì component */}
          <Route path="/carts" element={<Cart />} /> {/* Sử dụng element thay vì component */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
