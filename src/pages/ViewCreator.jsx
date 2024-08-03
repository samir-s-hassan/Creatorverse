import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import supabase from '../client'; // Adjust the path to your client.js file
import './ViewCreator.css'; // Import the CSS file

function ViewCreator() {
  const { id } = useParams(); // Get the ID from the route parameters
  const [creator, setCreator] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchCreator = async () => {
      const { data, error } = await supabase
        .from('creators') // Replace with your actual table name
        .select('*')
        .eq('id', id) // Filter by the ID from the route
        .single(); // Use .single() to get a single object

      if (error) {
        console.error('Error fetching creator:', error);
      } else {
        setCreator(data);
      }
      setLoading(false);
    };

    fetchCreator();
  }, [id]); // Run the effect whenever the ID changes

  if (loading) {
    return <p>Loading...</p>;
  }

  if (!creator) {
    return <p>Creator not found.</p>;
  }

  return (
    <div className="view-creator-container">
      <h1 className="creator-name">{creator.name}</h1>
      {creator.imageURL && (
        <div className="creator-image-container">
          <img src={creator.imageURL} alt={creator.name} className="creator-image" />
        </div>
      )}
      <p className="creator-url">URL: <a href={creator.url} target="_blank" rel="noopener noreferrer">{creator.url}</a></p>
      <p className="creator-description">{creator.description}</p>
      <Link to={`/edit/${creator.id}`} className="edit-button">Edit Creator</Link>
    </div>
  );
}

export default ViewCreator;
