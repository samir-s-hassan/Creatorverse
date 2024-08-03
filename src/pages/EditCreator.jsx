// EditCreator.js
import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import supabase from '../client'; // Adjust the path to your client.js file
import './EditCreator.css';

function EditCreator({ refreshCreators }) {
  const [name, setName] = useState('');
  const [url, setUrl] = useState('');
  const [description, setDescription] = useState('');
  const [imageURL, setImageURL] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const navigate = useNavigate();
  const { id } = useParams();

  useEffect(() => {
    const fetchCreator = async () => {
      const { data, error } = await supabase
        .from('creators')
        .select('*')
        .eq('id', id)
        .single();

      if (error) {
        console.error('Error fetching creator:', error);
        setError('Error fetching content creator. Please try again.');
      } else {
        setName(data.name);
        setUrl(data.url);
        setDescription(data.description);
        setImageURL(data.imageURL || '');
      }
    };

    fetchCreator();
  }, [id]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    const { data, error } = await supabase
      .from('creators')
      .update({ name, url, description, imageURL })
      .eq('id', id);

    setLoading(false);

    if (error) {
      setError('Error updating creator. Please try again.');
      console.error('Error updating creator:', error);
    } else {
      await refreshCreators(); // Refresh the creators list
      alert('Successfully updated!');
      navigate('/'); // Redirect to home page after alert
    }
  };

  return (
    <div className="edit-creator-container">
      <h1>Edit Creator</h1>
      {error && <p className="error-message">{error}</p>}
      {imageURL && (
        <div className="image-preview-container">
          <img src={imageURL} alt="Creator" className="image-preview" />
        </div>
      )}
      <form onSubmit={handleSubmit} className="edit-creator-form">
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
          {loading ? 'Updating...' : 'Update Creator'}
        </button>
      </form>
    </div>
  );
}

export default EditCreator;
