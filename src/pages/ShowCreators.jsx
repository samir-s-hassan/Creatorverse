import React from 'react';
import Card from '../components/Card'; // Adjust the path to your Card component
import './ShowCreators.css';

function ShowCreators({ creators }) {
  // Display a message if there are no creators
  if (creators.length === 0) {
    return (
      <div>
        <h1>Show all Creators</h1>
        <p>No content creators found.</p>
      </div>
    );
  }

  // Render the list of creators
  return (
    <div>
      <h1>Show all Creators</h1>
      <div className="creators-list">
        {creators.map((creator) => (
          <Card
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
