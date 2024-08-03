import React, { useEffect, useState } from 'react';
import { useRoutes, useParams } from 'react-router-dom';
import './App.css';
import AddCreator from './pages/AddCreator';
import EditCreator from './pages/EditCreator';
import ShowCreators from './pages/ShowCreators';
import ViewCreator from './pages/ViewCreator';
import supabase from './client'; // Adjust the path to your client.js file

function App() {
  const [creators, setCreators] = useState([]);

  useEffect(() => {
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

    fetchCreators();
  }, []); // Empty dependency array ensures this runs once on component mount

  const routes = useRoutes([
    { path: "/", element: <ShowCreators creators={creators} /> },
    { path: "add", element: <AddCreator creators={creators} /> },
    { path: "edit/:id", element: <EditCreator creators={creators} /> },
    { path: "view/:id", element: <ViewCreator creators={creators} /> }
  ]);

  return (
    <div className="App">
      {routes}
    </div>
  );
}

export default App;
