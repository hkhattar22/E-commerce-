import React, { useState, useEffect } from 'react';
import './cartpage.css'
import 'boxicons';
import CartItem from './cartitem';

const CartPage = ({ cartProduct, setCartProduct }) => {
  const [cartItems, setCartItems] = useState(cartProduct);
  const [discount, setDiscount] = useState(0);
  const [deliveryFee, setDeliveryFee] = useState(0);
  const [code, setCode] = useState('');
  const [subtotal, setSubtotal] = useState(0);
  const [total, setTotal] = useState(0);
  const [errorMessage, setErrorMessage] = useState('');

  useEffect(() => {
    setCartProduct(cartProduct);
  }, [cartProduct]);

  useEffect(() => {
    calculateSubtotal();
  }, [cartProduct]);

  useEffect(() => {
    calculateTotal();
  }, [subtotal, discount]);

  const updateQuantity = (id, quantity) => {
    setCartProduct(prevItems =>
      prevItems.map(item =>
        item.id === id ? { ...item, quantity } : item
      )
    );
  };

  const deleteItem = (id) => {
    setCartProduct(prevItems =>
      prevItems.filter(item => item.id !== id)
    );
  };

  const calculateSubtotal = () => {
    const subtotalValue = cartProduct.reduce((total, item) => {
      return total + item.price * item.quantity;
    }, 0);
    setSubtotal(subtotalValue);
  };

  const calculateTotal = () => {
    if (subtotal < 30) {
      setDiscount(0);
    }
    const deliveryFeeValue = subtotal < 20 && subtotal > 0 ? 5 : 0;
    setDeliveryFee(deliveryFeeValue);
    setTotal(subtotal - discount + deliveryFeeValue);
  };

  const calculateDiscount = () => {
    if (code === 'NEWUSER') {
      if (subtotal < 30) {
        setErrorMessage(`Add items worth $${30 - subtotal} to avail discount`);
        setCode('');
      } else {
        setDiscount(20);
        setCode('');
        setErrorMessage('');
      }
    } else {
      setDiscount(0);
      setCode('');
      setErrorMessage('Not a promo code');
    }
  };

  const promoCode = (event) => {
    event.preventDefault();
    calculateDiscount();
  };

  return (
      <div id="cartPage">
        <div id="cartText">
          YOUR CART
        </div>
        <div id="cart">
          <div id="cartItems">
            {cartProduct.length === 0 ? (
              <div id="emptyCart">
                Your cart is empty
              </div>
            ) : (
              cartProduct.map((item, index) => (
                <React.Fragment key={index}>
                  <CartItem item={item} updateQuantity={updateQuantity} deleteItem={deleteItem} />
                  {index < cartItems.length - 1 && <hr />}
                </React.Fragment>
              ))
            )}
          </div>
          <div id="orderSummary">
            <span>Order Summary</span>
            <div id="cartTiles">
              <div id="subtotal" className='tile'>Subtotal <div className="cost">${subtotal}</div></div>
              <div id="discount" className='tile'>Discount<div className="cost discount">-${discount}</div></div>
              <div id="delivery" className='tile'>Delivery Fee<div className="cost">${deliveryFee}</div></div>
            </div>
            <div id="total">Total <div className="cost">${total}</div> </div>
            <div id="error" style={{ width: '100%', color: 'red', fontSize: '0.8rem', display: 'flex', justifyContent: 'center' }}>
              {errorMessage}
            </div>
            <form onSubmit={promoCode}>
              <div id="promo">
                <div id="promoInput">
                  <box-icon name='purchase-tag' color="#909090"></box-icon>
                  <input type="text" placeholder="Add promo code" value={code} onChange={(e) => setCode(e.target.value)}></input>
                </div>
                <button type="submit">Apply</button>
              </div>
            </form>
            <button className="submitBtn">
              Go to Checkout
              <svg fill="white" viewBox="0 0 448 512" height="1em" className="arrow"><path d="M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l306.7 0L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z"></path></svg>
            </button>
          </div>
        </div>
      </div>
  );
};

export default CartPage;
