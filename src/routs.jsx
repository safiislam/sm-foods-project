import { createBrowserRouter } from 'react-router-dom';
import App from './App';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import AllProducts from './components/AllProducts';


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
                path: "/allProduct",
                element: <AllProducts></AllProducts>,
            },

            {
                path: "/contact",
                element: <Contact></Contact>,
            }
        ]
    }
])