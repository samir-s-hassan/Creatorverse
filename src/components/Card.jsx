import React from 'react';
import './Card.css'; // Import the CSS file

const Card = ({ name, url, description, imageURL, }) => {
  return (
    <div className="card">
      <img src={imageURL} alt={`${name}'s image`} className="card-image" />
      <div className="card-content">
        <h2 className="card-title">{name}</h2>
        <p className="card-description">{description}</p>
        <a href={url} className="card-url">Visit Profile</a>
      </div>
    </div>
  );
};

export default Card;
