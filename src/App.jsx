import { useRoutes } from 'react-router-dom'
import './App.css'
import AddCreator from './pages/AddCreator'
import EditCreator from './pages/EditCreator'
import ShowCreators from './pages/ShowCreators'
import ViewCreator from './pages/ViewCreator'

function App() {
  // Define the routes
  let routes = useRoutes([
    { path: "/", element: <ShowCreators /> }, // Main page - shows all creators
    { path: "add", element: <AddCreator /> }, // Add creator page
    { path: "edit/:id", element: <EditCreator /> }, // Edit creator page with a dynamic id
    { path: "view/:id", element: <ViewCreator /> } // View a specific creator page with a dynamic id
  ]);

  return (
    <div className="App">
      {routes}
    </div>
  );
}

export default App;
