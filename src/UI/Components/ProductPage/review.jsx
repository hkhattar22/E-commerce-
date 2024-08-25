import React, { useState, useEffect } from 'react';
import './productPage.css'
import 'boxicons';
import star from "../Assets/star.png";
import halfStar from "../Assets/halfstar.png";

const Review = ({key, user, rating, comment, date}) => {

    const [isExpanded, setIsExpanded] = useState(false);

    const fullStars = Math.floor(rating);
    const halfStars = rating % 1 !== 0;

    const toggleReadMore = () => {
        setIsExpanded(!isExpanded);
    };

    const displayedComment = isExpanded ? comment : comment.slice(0, 200);

    return (
        <div id="reviewCard">
            <div id="reviewCardHeader">
                {Array(fullStars).fill().map((_, index) => (
                    <img key={`full-${index}`} src={star} className="star-icon" />
                ))}
                {halfStars && <img src={halfStar} className="star-icon" />}
            </div>
            <div id="reviewUser">{user}</div>
            <div id="reviewDescription">
                "{displayedComment}" 
                {comment.length > 200 && (
                    <span id="readMoreButton" onClick={toggleReadMore}>
                        {isExpanded ? " Show Less" : " Read More"}
                    </span>
                )}
            </div>
            <div id="postedDate">Posted on {date}</div>
        </div>
    );
};

export default Review;