import React, { useState, useEffect } from 'react';
import './productPage.css'
import 'boxicons';
import ReactStars from "react-rating-stars-component";


const WriteReview = ({ addReview, toggleReviewBox}) => {
    const [fit1, setFit] = useState(0);
    const [quality1, setQuality] = useState(0);
    const [color1, setColor] = useState(0);
    const [comfort1, setComfort] = useState(0);
    const [text, setText] = useState('');
    const [errorMessage, setErrorMessage] =useState('');

    const handleChange = (event) => {
        setText(event.target.value);
    };

    const fit = (newRating) => {
        setFit(newRating);
    };

    const quality = (newRating) => {
        setQuality(newRating);
    };

    const color = (newRating) => {
        setColor(newRating);
    };

    const comfort = (newRating) => {
        setComfort(newRating);
    };

    const handleSubmit = () => {
        if (
            fit1 > 0 &&
            quality1 > 0 &&
            color1 > 0 &&
            comfort1 > 0 &&
            text.trim().length > 0
        ) {
            const newReview = {
                user: 'CurrentUserName',
                rating: (fit1 + quality1 + color1 + comfort1) / 4,
                comment: text,
                date: getCurrentDate(),
            };
            addReview(newReview);
            setErrorMessage('');
        } else {
            setErrorMessage('Please provide ratings for all categories and a comment.');
        }
    };

    const getCurrentDate = () => {
        const date = new Date();
        return date.toLocaleDateString();
    };


    return (
        <>
        <div id="writeReview">
        <button id="crossButton" onClick={toggleReviewBox}>x</button>
            <div id="starReview">
            <span>{errorMessage}</span>
                <div id="starReviewHeader">By Feature</div>
                <hr id="customHr"></hr>
                <div>
                    <div>Fit</div>
                    <ReactStars
                        count={5}
                        onChange={fit}
                        size={24}
                        isHalf={true}
                        emptyIcon={<i className="far fa-star"></i>}
                        halfIcon={<i className="fa fa-star-half-alt"></i>}
                        fullIcon={<i className="fa fa-star"></i>}
                        activeColor="#ffd700"
                    />
                </div>
                <hr id="customHr"></hr>
                <div>
                    <div>Quality</div>
                    <ReactStars
                        count={5}
                        onChange={quality}
                        size={24}
                        isHalf={true}
                        emptyIcon={<i className="far fa-star"></i>}
                        halfIcon={<i className="fa fa-star-half-alt"></i>}
                        fullIcon={<i className="fa fa-star"></i>}
                        activeColor="#ffd700"
                    />
                </div>
                <hr id="customHr"></hr>
                <div>
                    <div>Color</div>
                    <ReactStars
                        count={5}
                        onChange={color}
                        size={24}
                        isHalf={true}
                        emptyIcon={<i className="far fa-star"></i>}
                        halfIcon={<i className="fa fa-star-half-alt"></i>}
                        fullIcon={<i className="fa fa-star"></i>}
                        activeColor="#ffd700"
                    />
                </div>
                <hr id="customHr"></hr>
                <div>
                    <div>Comfort</div>
                    <ReactStars
                        count={5}
                        onChange={comfort}
                        size={24}
                        isHalf={true}
                        emptyIcon={<i className="far fa-star"></i>}
                        halfIcon={<i className="fa fa-star-half-alt"></i>}
                        fullIcon={<i className="fa fa-star"></i>}
                        activeColor="#ffd700"
                    />
                </div>
                <hr id="customHr"></hr>
            </div>
            <div id="writeAReview">
                <div id="starReviewHeader">Write Review</div>
                <textarea
                    id="exampleTextArea"
                    value={text}
                    onChange={handleChange}
                    placeholder="Type something..."
                    rows="5"
                    cols="33"
                />
            </div>
            <button id="postButton" onClick={handleSubmit}>Post</button>
        </div>
        </>
    );
};

export default WriteReview;