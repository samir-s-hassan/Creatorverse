import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import supabase from '../client'; // Adjust the path to your client.js file
import './EditCreator.css';

function EditCreator({ refreshCreators }) {
  const [name, setName] = useState('');
  const [url, setUrl] = useState('');
  const [description, setDescription] = useState('');
  const [imageURL, setImageURL] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

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
      window.location.href = '/'; // Redirect to home page
    }
  };

  const handleDelete = async () => {
    const confirmDelete = window.confirm('Are you sure you want to delete this creator?');
    if (confirmDelete) {
      setLoading(true);
      const { data, error } = await supabase
        .from('creators')
        .delete()
        .eq('id', id);

      setLoading(false);

      if (error) {
        setError('Error deleting creator. Please try again.');
        console.error('Error deleting creator:', error);
      } else {
        await refreshCreators(); // Refresh the creators list
        alert('Successfully deleted!');
        window.location.href = '/'; // Redirect to home page
      }
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
        <div className="button-container">
          <button type="submit" disabled={loading}>
            {loading ? 'Updating...' : 'Save Changes'}
          </button>
          <button type="button" onClick={handleDelete} disabled={loading}>
            {loading ? 'Deleting...' : 'Delete Creator'}
          </button>
        </div>
      </form>
      <Link to="/" className="back-to-home">Back to Home</Link>
    </div>
  );
}

export default EditCreator;
