import './App.css';
import Index from './pages/Home';
import Product from './pages/Product';
import Blog from './pages/Blog';
import { BrowserRouter, Routes, Route, Router, Link} from 'react-router-dom';

function App() {
  return (
    <div className="App">
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
        <Footer>
          <Link to='/'>Home</Link>
          <Link to='/product'>Product</Link>
          <Link to='/blog'>Blog</Link>
          <Link to='/cart'>Cart</Link>
          <Link to='/Home'>Logo</Link>
        </Footer>
    </BrowserRouter>
    </div>
  );
}

export default App;
