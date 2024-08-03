import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import supabase from '../client'; // Adjust the path to your client.js file
import Card from '../components/Card'; // Adjust the path to your Card component
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
      <div className="view-creator-card">
        <Card
          name={creator.name}
          url={creator.url}
          description={creator.description}
          imageURL={creator.imageURL}
        />
      </div>
    </div>
  );
}

export default ViewCreator;
