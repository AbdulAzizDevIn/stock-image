
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import './App.css';
import './components/style.css'

import Home from './components/Home';
import Navbar from './components/NavBar';
import DownloadHist from './components/DownloadHist';

function App() {


  const router = createBrowserRouter([
    {
      path:"/",
      element:<Navbar/>,
      children: [{
        path: "/",
        element: <Home/>
      },
      {
        path: "/download-history",
        element: <DownloadHist/>
      }
    ]
    }
  ])
  return (
    <RouterProvider router={router}></RouterProvider>
  );
}

export default App;
