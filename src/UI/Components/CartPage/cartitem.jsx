import React from 'react';
import './cartpage.css'
import 'boxicons';

const CartItem = () => {

    return (
        <div id="cartItem">
            <div id="itemImage">
                <img src="https://i.pinimg.com/564x/c1/1d/16/c11d164de692594acf53c9a855093139.jpg"></img>
            </div>
            <div id="itemDescription">
                <div id="itemHeading">
                    <span>Plain White T-shirt</span>
                    <button><box-icon type='solid' name='trash' color='red' size='xs'></box-icon></button>
                </div>
                <div id="itemChar">
                    <span>Size: Large</span>
                    <span>Color: White</span>
                </div>
                <div id="itemBottom">
                    <div id="itemCost">$145</div>
                    <div id="itemQuantity">
                        <button>-</button>
                        <span>1</span>
                        <button>+</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CartItem;