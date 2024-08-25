import React, { useState, useEffect } from 'react';
import './productPage.css'
import 'boxicons';
import star from "../Assets/star.png"
import halfStar from "../Assets/halfstar.png"
import ReviewCard from "./review.jsx";
import WriteReview from "./writeReview.jsx";

const ProductPage = ({ cartProduct, setCartProduct }) => {

    const product = {
        "id": "shirt001",
        "name": "ONE LIFE GRAPHIC T-SHIRT",
        "rating": 4.5,
        "description": "This graphic t-shirt which is perfect for any occasion. Crafted from a strong and breathable fabric, it offers superior comform and style.",
        "price": {
            "original": 300.00,
            "discount": 40.00
        },
        "sizes": ["Small", "Medium", "Large", "X-Large"],
        "colors": [
            {
                "name": "Blue",
                "hex": "#0000FF"
            },
            {
                "name": "Red",
                "hex": "#FF0000"
            },
            {
                "name": "Green",
                "hex": "#008000"
            }
        ],
        "images": [
            {
                "id": "mainImage",
                "url": "https://m.media-amazon.com/images/I/71hLYEi5SoL._SY741_.jpg"
            },
            {
                "id": "sideImage",
                "url": "https://m.media-amazon.com/images/I/71woBXPcxPL._SY741_.jpg"
            },
            {
                "id": "sideImage",
                "url": "https://m.media-amazon.com/images/I/61BgTz16eTL._SY741_.jpg"
            },
            {
                "id": "sideImage",
                "url": "https://m.media-amazon.com/images/I/71iiqwLf-pL._SY741_.jpg"
            }
        ],
        "stock": 120,
        "reviews": [
            {
                "user": "JohnDoe123",
                "rating": 4.5,
                "comment": "Great shirt, very comfortable and fits well.",
                "date": "12/1/2024"
            },
            {
                "user": "JaneSmith456",
                "rating": 4.0,
                "comment": "Good quality, but the color is slightly different from the picture.",
                "date": "4/22/2023"
            }
        ]
    }

    const fullStars = Math.floor(product.rating);
    const halfStars = product.rating % 1 !== 0;

    const [selectedImage, setSelectedImage] = useState(product.images[0].url);
    const [quantity, setQuantity] = useState(1);
    const [selectedColor, setSelectedColor] = useState();
    const [selectedSize, setSelectedSize] = useState();
    const [reviewBox, setReviewBox] = useState(false);
    const [productReviews, setProductReviews] = useState(product.reviews);
    const [glassEffect, setGlassEffect] = useState(false);
    const [visibleReviews, setVisibleReviews] = useState(6);
    const [sortOption, setSortOption] = useState('Latest');


    const handleImageClick = (image) => {
        setSelectedImage(image.url);
    };

    const addReview = (newReview) => {
        setProductReviews([...productReviews, newReview]);
        setReviewBox(false);
        setGlassEffect(false);
    };

    const calculatePrice = () => {
        return product.price.original - (product.price.original * product.price.discount / 100);
    }

    const handleQuantityChange = (change) => {
        setQuantity(prev => Math.max(1, prev + change));
    };

    const handleAddToCart = () => {
        const item = {
            id: `${product.id}-${Date.now()}`,
            name: product.name,
            quantity,
            color: selectedColor,
            size: selectedSize,
            price: calculatePrice(),
            image: product.images[0].url
        };
        setCartProduct([...cartProduct, item]);
    };

    const toggleReviewBox = () => {
        setReviewBox(!reviewBox);
        setGlassEffect(!glassEffect);
    }

    const handleReadMore = () => {
        setVisibleReviews(productReviews.length);
    };

    const handleSortChange = (selectedOption = sortOption) => {
        const sortedReviews = [...productReviews].sort((a, b) => {
            if (selectedOption === 'Latest') {
                return new Date(b.date) - new Date(a.date); // sort by latest first
            } else if (selectedOption === 'Oldest') {
                return new Date(a.date) - new Date(b.date); // sort by oldest first
            }
            return 0;
        });

        setProductReviews(sortedReviews);
    };

    const handleSortChangeSelect = (e) => {
        setSortOption(e.target.value);
        handleSortChange(e.target.value);
    };

    useEffect(() => {
        handleSortChange();
    }, [productReviews, sortOption]);

    

    return (
        <div id="viewProduct">
            {glassEffect && (<div id="glassEffect"></div>)}
            <div id="innerContainer">
                {reviewBox && (<WriteReview addReview={addReview} toggleReviewBox={toggleReviewBox} />)}
                <div id="images0">
                    <div id="productImages">
                        {product.images.map((image, index) => (
                            <div key={index} className="image" onClick={() => handleImageClick(image)}>
                                <img
                                    src={image.url}
                                    alt={`Product view ${index + 1}`}
                                    className={selectedImage === image.url ? 'selected' : ''}
                                />
                            </div>
                        ))}
                    </div>
                    <div id="showImage">
                        <img src={selectedImage} alt="Selected product image" />
                    </div>
                </div>
                <div id="description">
                    <div id="header">
                        {product.name}
                    </div>
                    <hr />
                    <div id="productReview">
                        {Array(fullStars).fill().map((_, index) => (
                            <img key={`full-${index}`} src={star} className="star-icon" />
                        ))}
                        {halfStars && <img src={halfStar} className="star-icon" />}
                        <div id="ratingInner">
                            {product.rating}/5
                        </div>
                    </div>
                    <hr />
                    <div id="productCost">
                        <div id="discounted">${calculatePrice()}</div>
                        <div id="original">${product.price.original}</div>
                        <div id="productDiscount">-{product.price.discount}%</div>
                    </div>
                    <hr />
                    <div id="productDescription">
                        {product.description}
                    </div>
                    <hr id="customHr" />
                    <span id="tag">Select Color</span>
                    <div id="selectColor">
                        {product.colors.map((color, index) => (
                            <button
                                key={index}
                                className="color"
                                style={{ backgroundColor: color.hex, color: selectedColor === color.name ? 'white' : color.hex }}
                                onClick={() => setSelectedColor(color.name)}
                            >✓</button>
                        ))}
                    </div>
                    <hr id="customHr" />
                    <span id="tag">Select Size</span>
                    <div id="choseSize">
                        {product.sizes.map((size, index) => (
                            <button key={index} className="size" onClick={() => setSelectedSize(size)}
                                style={{
                                    backgroundColor: selectedSize === size ? 'black' : '#eee',
                                    color: selectedSize === size ? 'white' : 'black'
                                }}>
                                {size}
                            </button>
                        ))}
                    </div>
                    <hr id="customHr" />
                    <div id="addToCart">
                        <div id="productQuantity">
                            <button onClick={() => handleQuantityChange(-1)}>-</button>{quantity}<button onClick={() => handleQuantityChange(1)}>+</button>
                        </div>
                        <button id="addButton" onClick={handleAddToCart}>Add to Cart</button>
                    </div>
                </div>
            </div>
            <hr id="customHr" />
            <div id="reviewPage">
                <div id="reviewData">
                    <div>All Reviews</div>
                    <div id="buttons">
                        <select value={sortOption} onChange={handleSortChangeSelect}>
                            <option value="Latest">Latest</option>
                            <option value="Oldest">Oldest</option>
                        </select>
                        <button onClick={toggleReviewBox}>Write a Review</button>
                    </div>
                </div>
                <div id="reviewAll">
                    {productReviews.slice(0, visibleReviews).map((review, index) => (
                        <ReviewCard
                            key={index}
                            user={review.user}
                            rating={review.rating}
                            comment={review.comment}
                            date={review.date}
                        />
                    ))}
                </div>
                {visibleReviews < productReviews.length && (
                    <button id="readMoreButton" onClick={handleReadMore}>
                        Read More
                    </button>
                )}
            </div>
        </div>
    );
};

export default ProductPage;