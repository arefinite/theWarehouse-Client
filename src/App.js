import { Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import Footer from "./Component/Shared/Footer";
import Header from "./Component/Shared/Header";
import NotFound from "./Component/Shared/NotFound";
import RequireAuth from "./Component/Shared/RequireAuth";
import About from "./Component/Pages/About/About";
import Blog from "./Component/Pages/Blog-Inventory/Blog";
import Inventory from "./Component/Pages/Blog-Inventory/Inventory";
import Home from "./Component/Pages/Home/Home";
import Login from "./Component/Pages/Login-Registration/Login";
import Register from "./Component/Pages/Login-Registration/Register";
import ManegeProduct from "./Component/Pages/Add-Delete/ManegeProduct";
import PdAdd from "./Component/Pages/Add-Delete/PdAdd";
import Stock from "./Component/Pages/Stock/Stock";
import StockDet from "./Component/Pages/Stock/StockDet";
import 'react-toastify/dist/ReactToastify.css';
import Contact from "./Component/Pages/Contact/Contact";


function App() {
  return (
    <div>
      <Header/>
      <div className='px-4 md:px-16'>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="*" element={<NotFound/>} />
          <Route path="/inventory" element={<Stock/>} />
          <Route path="/inventory/:productId" element={
          <RequireAuth>
            <StockDet/>
          </RequireAuth>
          } />
          <Route path="/login" element={<Login/>} />
          <Route path="/signup" element={<Register/>} />
          <Route path="/about" element={<About/>} />
          <Route path="/blogs" element={<Blog/>} />
          <Route path="/contact" element={<Contact/>} />
          <Route path="/my-items" element={
          <RequireAuth>
            <Inventory/>
          </RequireAuth>
          } />
          <Route path="/add-item" element={
          <RequireAuth>
            <PdAdd/>
          </RequireAuth>
          } />
          <Route path="/delete-item" element={
          <RequireAuth>
            <ManegeProduct/>
          </RequireAuth>
          } />
        </Routes>
        <ToastContainer />
      </div>
      <Footer/>
      
    </div>
  );
}

export default App;
