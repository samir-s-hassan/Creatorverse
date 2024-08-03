import React from 'react';
import { Link } from 'react-router-dom';
import './Card.css'; // Import the CSS file

const Card = ({ id, name, url, description, imageURL }) => {
  return (
    <div className="card">
      <div className="card-image-container">
        {imageURL ? (
          <img src={imageURL} alt={`${name}'s image`} className="card-image" />
        ) : (
          <p className="no-image-text">No Image Available</p>
        )}
      </div>
      <div className="card-content">
        <h2 className="card-title">{name}</h2>
        <p className="card-description">{description}</p>
        <a href={url} className="card-url">Visit Profile</a>
        <div className="card-buttons">
          <Link to={`/edit/${id}`} className="card-button card-edit-button">Edit</Link>
          <Link to={`/view/${id}`} className="card-button card-view-button">View</Link>
        </div>
      </div>
    </div>
  );
};

export default Card;
