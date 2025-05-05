import React from 'react';
import './LibraryCard.css';

export const LibraryCard = ({ image, title, description }) => {
    return (
        <div className="career-card">
            <img src={image} alt={`${title} icon`} />
            <h3>{title}</h3>
            <p>{description}</p>
        </div>
    );
};

