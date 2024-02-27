import React from 'react';
import Carousel from './Carousel';
import './App.css';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Home from './Home';
import Product from './pages/Product';
import Blog from './pages/Blog';

function App() {
  return (
    <div className="App">
      <Carousel /> 
        {
          <BrowserRouter>
            <nav>
              <Link to='/'>Home</Link>
              <Link to='/product'>Product</Link>
              <Link to='/blog'>Blog</Link>
            </nav>
            <Routes>
              <Route path='/' element={<Home />} />
              <Route path='/product' element={<Product />} />
              <Route path='/blog' element={<Blog />} />
            </Routes>         
          </BrowserRouter>
        }
    </div>
  );
}

export default App;





