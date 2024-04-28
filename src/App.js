import './App.css';
import { Routes, Route, BrowserRouter as Router } from 'react-router-dom';
import AppContainer from './components/containers/AppContainer';
import Home from './components/pages/Home';
import Products from './components/pages/Products';
import CustomOrders from './components/pages/CustomOrders';
import Cart from './components/pages/Cart';
import Login from './components/pages/Login';
import SignUp from './components/pages/Signup';


function App() {
  return (
    <Router>
      <Routes>
            <Route path="/" element={<AppContainer />}>
              <Route path='/home' element={<Home />} />
              <Route path="/products" element={<Products />} />
              <Route path="/CustomOrders" element={<CustomOrders />} />
              <Route path="/cart" element={<Cart />} />
              <Route path="/login" element={<Login />} />
              <Route path="/signup" element={<SignUp />} />
              <Route path="/:text?" element={<Home />} />
            </Route>
      </Routes>
    </Router>
  );
}

export default App;
