import React, { useState, useEffect } from 'react';
import './cartpage.css'
import 'boxicons';
import CartItem from './cartitem';

const CartPage = () => {

    const [cartItems, setCartItems] = useState([
        { id: 1, name: "Plain T-Shirt", color:"White", price: 8, size:"Small", quantity: 1, image:'https://i.pinimg.com/564x/c1/1d/16/c11d164de692594acf53c9a855093139.jpg' },
        { id: 2, name: "Women Trouser", color:"Blue", price: 10, size: "Medium", quantity: 1, image:'https://m.media-amazon.com/images/I/71jG9twNJ8L._AC_UY350_.jpg' }
    ]);
    const [discount, setDiscount] = useState(0);
    const [deliveryFee, setDeliveryFee]=useState(0);
    const [code, setCode] = useState('');
    const [subtotal, setSubtotal] = useState(0);
    const [total,setTotal] = useState(0);
    const [errorMessage, setErrorMessage] = useState('');

    const updateQuantity = (id, quantity) => {
        setCartItems(prevItems =>
            prevItems.map(item =>
                item.id === id ? { ...item, quantity } : item
            )
        );
    };

    const deleteItem = (id) => {
        setCartItems(prevItems =>
            prevItems.filter(item => item.id !== id)
        );
    };

    const calculateSubtotal = () => {
        const subtotalValue = cartItems.reduce((total, item) => {
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

    const calculateDiscount = (event) =>{
        if(code==='NEWUSER'){
            if(subtotal<30){
                setErrorMessage(`add items worth `+`$`+`${30-subtotal} to avail discount`);
                setCode('');
            }
            else{
                setDiscount(20);
                setCode('');
                setErrorMessage('');
            }
        }
        else{
            setDiscount(0);
            setCode('');
            setErrorMessage('Not a promo code');
        }
    }

    const promoCode =(event) =>{
        event.preventDefault();
        calculateDiscount();
    }

    useEffect(() => {
        calculateSubtotal();
    }, [cartItems]);

    useEffect(() => {
        calculateTotal();
    }, [subtotal, discount]);

    return (
        <div id="cartPage">
            <div id="cartText">
                YOUR CART
            </div>
            <div id="cart">
                <div id="cartItems">
                    {cartItems.map((item, index) => (
                        <React.Fragment key={index}>
                            <CartItem item={item} updateQuantity={updateQuantity} deleteItem={deleteItem} />
                            {index < cartItems. length - 1 && <hr />}
                        </React.Fragment>
                    ))}
                </div>
                <div id="orderSummary">
                    <span>Order Summary</span>
                    <div id="cartTiles">
                        <div id="subtotal" className='tile'>Subtotal <div className="cost">${subtotal}</div></div>
                        <div id="discount" className='tile'>Discount<div className="cost discount">-${discount}</div></div>
                        <div id="delivery" className='tile'>Delivery Fee<div className="cost">${deliveryFee}</div></div>
                    </div>
                    <div id="total">Total <div className="cost">${total}</div> </div>
                    <div id="error" style={{width:'100%', color:'red', fontSize:'0.8rem', display:'flex', justifyContent:'center'}}>
                        {errorMessage}
                    </div>
                    <form onSubmit={promoCode}>
                        <div id="promo">
                            <div id="promoInput">
                                <box-icon name='purchase-tag' color="#909090"></box-icon>
                                <input type="text" placeholder="Add promo code"
                                value={code} onChange={(e) => setCode(e.target.value)}></input>
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