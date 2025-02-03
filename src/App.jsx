import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './assets/styles/App.css'
import {About, Contact, Experience, Home, HomeLayOut, Resume, Services} from './pages';
const router = createBrowserRouter([{
  path: '/',
  element: <HomeLayOut />,
  children: [
    {
      index: true,
      element: <Home />,
    },
    {
      path: '/About',
      element: <About />,
    },
    {
      path: '/Experience',
      element: <Experience />,
    },
    {
      path: '/Contact',
      element: <Contact />,
    },
    {
      path: '/Services',
      element: <Services />,
    },
    {
      path: '/Resume',
      element: <Resume />,
    }
  ]
},
]);

function App() {

  return (
    <RouterProvider router={router}/>
  );
}

export default App
