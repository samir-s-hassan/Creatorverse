import React from "react";
import { Link } from "react-router-dom";
import Card from "../components/Card"; // Adjust the path to your Card component
import "./ShowCreators.css";

function ShowCreators({ creators }) {
  const handleReload = () => {
    window.location.reload(); // Reload the current page
  };

  // Display a message if there are no creators
  if (creators.length === 0) {
    return (
      <div className="show-creators-container">
        <h1>Show all Creators</h1>
        <p>No content creators found.</p>
        <Link to="/add" className="add-creator-button">
          Add New Creator
        </Link>
        <button onClick={handleReload} className="view-all-button">
          View All Creators
        </button>
      </div>
    );
  }

  // Render the list of creators
  return (
    <div className="show-creators-container">
      <h1>Show all Creators</h1>
      <Link to="/add" className="add-creator-button">
        Add New Creator
      </Link>
      <Link to="/" className="view-all-button">
        View All Creators
      </Link>
      <div className="creators-list">
        {creators.map((creator) => (
          <Card
            id={creator.id}
            name={creator.name}
            url={creator.url}
            description={creator.description}
            imageURL={creator.imageURL} // Ensure this matches your data schema
          />
        ))}
      </div>
    </div>
  );
}

export default ShowCreators;
