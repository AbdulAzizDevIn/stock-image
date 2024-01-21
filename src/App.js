
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import './App.css';
import './components/comp.css'

import Home from './components/Home';
import Navbar from './components/NavBar';
function App() {


  const router = createBrowserRouter([
    {
      path:"/",
      element:<Navbar/>,
      children: [{
        path: "/",
        element: <Home/>
      }]
    }
  ])
  return (
    <RouterProvider router={router}></RouterProvider>
  );
}

export default App;
