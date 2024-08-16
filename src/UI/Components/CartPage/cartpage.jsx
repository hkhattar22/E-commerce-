import React from 'react';
import './cartpage.css'
import 'boxicons';
import CartItem from './cartitem';

const CartPage = () => {

    return (
        <div id="cartPage">
            <div id="cartText">
                YOUR CART
            </div>
            <div id="cart">
                <div id="cartItems">
                    <CartItem/>
                </div>
                <div id="orderSummary">
                    <span>Order Summary</span>
                    <div id="cartTiles">
                        <div id="subtotal" className='tile'>Subtotal <div className="cost">$565</div></div>
                        <div id="discount" className='tile'>Discount<div className="cost discount">-$113</div></div>
                        <div id="delivery" className='tile'>Delivery Fee<div className="cost">$15</div></div>
                    </div>
                    <div id="total">Total <div className="cost">$467</div> </div>
                    <form>
                        <div id="promo">
                            <div id="promoInput">
                                <box-icon name='purchase-tag' color="#909090"></box-icon>
                                <input type="text" placeholder="Add promo code"></input>
                            </div>
                            <button type="submit">Apply</button>
                        </div>
                    </form>
                    <button class="submitBtn">
                        Go to Checkout
                        <svg fill="white" viewBox="0 0 448 512" height="1em" class="arrow"><path d="M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l306.7 0L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z"></path></svg>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default CartPage;