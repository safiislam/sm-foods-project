import { createBrowserRouter } from 'react-router-dom';
import App from './App';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';


export const router = createBrowserRouter([
    {
        path: "/",
        element: <App></App>,
        children: [
            {
                path: "/",
                element: <Home></Home>
            },
            
            {
                path: "/about",
                element: <About></About>,
            },

            {
                path: "/contact",
                element: <Contact></Contact>,
            }
        ]
    }
])