import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Header from '../src/UI/Components/Common/header/header';
import Footer from '../src/UI/Components/Common/footer/footer';
import Cart from '../src/UI/Components/CartPage/cartpage';

function App() {
  return (
    <Router>
      <div id="main">
        <Header />

        <div id="content">
          <Routes>
            <Route path="/cart" element={<Cart />} />
          </Routes>
        </div>

        <Footer />
      </div>
    </Router>
    
  );
}

export default App;
