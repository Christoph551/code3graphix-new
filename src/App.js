import './App.css';
import { Routes, Route, BrowserRouter as Router } from 'react-router-dom';
import AppContainer from './components/containers/AppContainer';
import Home from './components/pages/Home';
import Products from './components/pages/Products';
import CustomOrders from './components/pages/CustomOrders';
import Cart from './components/pages/Cart';


function App() {
  return (
    <Router>
      <Routes>
            <Route path="/" element={<AppContainer />}>
              <Route path='/home' element={<Home />} />
              <Route path="/products" element={<Products />} />
              <Route path="/CustomOrders" element={<CustomOrders />} />
              <Route path="/cart" element={<Cart />} />
              <Route path="/:text?" element={<Home />} />
            </Route>
      </Routes>
    </Router>
  );
}

export default App;
