import "./App.css";
import { Outlet } from "react-router-dom";
import Footer from "./components/Footer";
import Navbar from "./components/navbar/Navbar";

function App() {

  return (
    <div className="App">
      <Navbar></Navbar>
      <div className='min-h-[calc(100vh-196px)] '>
        <Outlet></Outlet>
      </div>
      <Footer></Footer>
    </div>
  );
}

export default App;
