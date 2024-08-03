// AddCreator.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import supabase from '../client'; // Adjust the path to your client.js file
import './AddCreator.css';

function AddCreator({ refreshCreators }) {
  const [name, setName] = useState('');
  const [url, setUrl] = useState('');
  const [description, setDescription] = useState('');
  const [imageURL, setImageURL] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    const { data, error } = await supabase
      .from('creators')
      .insert([{ name, url, description, imageURL }]);

    setLoading(false);

    if (error) {
      setError('Error adding creator. Please try again.');
      console.error('Error adding creator:', error);
    } else {
      await refreshCreators(); // Refresh the creators list
      alert('Successfully added!');
      navigate('/'); // Redirect to home page after alert
    }
  };

  return (
    <div className="add-creator-container">
      <h1>Add a New Creator</h1>
      {error && <p className="error-message">{error}</p>}
      <form onSubmit={handleSubmit} className="add-creator-form">
        <label>
          Name:
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </label>
        <label>
          URL:
          <input
            type="url"
            value={url}
            onChange={(e) => setUrl(e.target.value)}
            required
          />
        </label>
        <label>
          Description:
          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            required
          />
        </label>
        <label>
          Image URL (optional):
          <input
            type="url"
            value={imageURL}
            onChange={(e) => setImageURL(e.target.value)}
          />
        </label>
        <button type="submit" disabled={loading}>
          {loading ? 'Adding...' : 'Add Creator'}
        </button>
      </form>
    </div>
  );
}

export default AddCreator;
