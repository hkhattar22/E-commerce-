import React from 'react';
import { useNavigate } from 'react-router-dom';
import './header.css'
import Logo from '../../Assets/logo.png';
import 'boxicons';
import CartPage from "../../CartPage/cartpage";

const Header = () => {
    const navigate = useNavigate();
    
    const handleAddToCartClick = () => {
        navigate('/cart');
    };

    return (
        <div id="commonHeader">
            <div id="headerInner">
                <div id="headerLogo">
                    <box-icon name='menu' class="mobile-view"></box-icon>
                    <img src={Logo}></img>
                </div>
                <div id="headerButtons">
                    <button>Shop</button>
                    <button>On Sale</button>
                    <button>New Arrivals</button>
                    <button>Brands</button>
                </div>
                <div id="headerSearch">
                    <box-icon name='search' size='20px' color='#909090'></box-icon>
                    <input type="text" placeholder='Search for products'></input>
                </div>
                <div id="headerIcons">
                    <button className="mobile-view"><box-icon name='search' size='20px'></box-icon></button>
                    <button onClick={handleAddToCartClick}><box-icon name='cart' size="20px"></box-icon></button>
                    <button><box-icon name='user-circle' size="20px"></box-icon></button>
                </div>
            </div>
        </div>
    );
};

export default Header;