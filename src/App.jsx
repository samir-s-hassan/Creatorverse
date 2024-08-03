import React, { useState, useEffect } from 'react';
import { useRoutes } from 'react-router-dom';
import './App.css';
import AddCreator from './pages/AddCreator';
import EditCreator from './pages/EditCreator';
import ShowCreators from './pages/ShowCreators';
import ViewCreator from './pages/ViewCreator';
import supabase from './client'; // Adjust the path to your client.js file

function App() {
  const [creators, setCreators] = useState([]);

  // Function to fetch creators
  const fetchCreators = async () => {
    const { data, error } = await supabase
      .from('creators') // Replace with your actual table name
      .select('*');

    if (error) {
      console.error('Error fetching data:', error);
    } else {
      setCreators(data);
    }
  };

  // Function to refresh creators list
  const refreshCreators = async () => {
    await fetchCreators();
  };

  // Fetch creators on component mount
  useEffect(() => {
    fetchCreators();
  }, []);

  // Define routes
  const routes = useRoutes([
    { path: "/", element: <ShowCreators creators={creators} /> },
    { path: "add", element: <AddCreator refreshCreators={refreshCreators} /> },
    { path: "edit/:id", element: <EditCreator refreshCreators={refreshCreators} /> },
    { path: "view/:id", element: <ViewCreator creators={creators} /> }
  ]);

  return (
    <div className="App">
      {routes}
    </div>
  );
}

export default App;
