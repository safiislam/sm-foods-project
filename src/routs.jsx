import { createBrowserRouter } from 'react-router-dom';
import App from './App';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import AllProducts from './components/AllProducts';
import ProductDetails from './components/ProductDetails';
import Ghee from './components/Ghee';


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
                path: "/productDetails/:id",
                element: <ProductDetails></ProductDetails>,
                loader: async({params}) => {
                    const res = await fetch(`/ProductData.json`)
                    const data = await res.json()
                    const singleProduct = data.find(details => details.id == params.id)
                    return singleProduct;
                }
            },
            {
                path: "/ghee",
                element: <Ghee></Ghee>,
            },

            {
                path: "/contact",
                element: <Contact></Contact>,
            }
        ]
    }
])