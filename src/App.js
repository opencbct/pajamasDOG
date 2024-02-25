import './App.css';
import Index from './pages/Index';
import Product from './pages/Product';
import Blog from './pages/Blog';
import Contact from './pages/Contact';
import { BrowserRouter as router, Routes, Route, Router } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path='/' element={<Index />} />
          <Route path='/Product' element={<Product />} />
          <Route path='/Blog' element={<Blog />} />
          <Route path='/Contact' element={<Contact />} />
        </Routes>
      </Router> 
    </div>
  );
}

export default App;
