import React, {useState} from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Header from '../src/UI/Components/Common/header/header';
import Footer from '../src/UI/Components/Common/footer/footer';
import Cart from '../src/UI/Components/CartPage/cartpage';
import ViewProduct from '../src/UI/Components/ProductPage/productPage';

function App() {
  const [cartProduct, setCartProduct] = useState([]);
  return (
    <Router>
      <div id="main">
        <Header />

        <div id="content">
          <Routes> 
            <Route path="/cart" element={<Cart cartProduct={cartProduct} setCartProduct={setCartProduct}/>} />
            <Route path="/product" element={<ViewProduct cartProduct={cartProduct} setCartProduct={setCartProduct} />} />
          </Routes>
        </div>

        <Footer />
      </div>
    </Router>
    
  );
}

export default App;
