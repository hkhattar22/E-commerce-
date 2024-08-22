import React, {useState, useEffect} from 'react';
import './cartpage.css'
import 'boxicons';

const CartItem = ({item,  updateQuantity, deleteItem }) => {

    const [quantity, setQuantity] = useState(1);

    const incrementQuantity = () => {
        setQuantity(prevQuantity => {
            const newQuantity = prevQuantity + 1;
            updateQuantity(item.id, newQuantity);
            return newQuantity;
        });
    };

    const decrementQuantity = () => {
        setQuantity(prevQuantity => {
            const newQuantity = prevQuantity > 1 ? prevQuantity - 1 : 1;
            updateQuantity(item.id, newQuantity);
            return newQuantity;
        });
    };

    useEffect(() => {
        updateQuantity(item.id, quantity);
    }, [quantity]);

    return (
        <div id="cartItem">
            <div id="itemImage">
                <img src={item.image}></img>
            </div>
            <div id="itemDescription">
                <div id="itemHeading">
                    <span>{item.name}</span>
                    <button onClick={() => deleteItem(item.id)}><box-icon type='solid' name='trash' color='red' size='15px'></box-icon></button>
                </div>
                <div id="itemChar">
                    <span>Size: {item.size}</span>
                    <span>Color: {item.color}</span>
                </div>
                <div id="itemBottom">
                    <div id="itemCost">${item.price}</div>
                    <div id="itemQuantity">
                        <button onClick={decrementQuantity}>-</button>
                        <span>{item.quantity}</span>
                        <button onClick={incrementQuantity}>+</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CartItem;