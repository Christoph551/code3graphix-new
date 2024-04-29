import './App.css';
import { Routes, Route, BrowserRouter as Router } from 'react-router-dom';
import AppContainer from './components/containers/AppContainer';
import Home from './components/pages/Home';
import Products from './components/pages/Products';
import CustomOrders from './components/pages/CustomOrders';
import Cart from './components/pages/Cart';
import Login from './components/pages/Login';
import SignUp from './components/pages/Signup';
import Drinkware from './components/productCat/Drinkware';
import EngraveableMetals from './components/productCat/EngraveableMetals';
import GlassAndAcrylics from './components/productCat/GlassAndAcrylics';
import LaserableLeather from './components/productCat/LaserableLeather';
import PersonalizedGifts from './components/productCat/PersonalizedGifts';
import Sublimation from './components/productCat/Sublimation';


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
              <Route path="/categories/1" element={<Drinkware />} />
              <Route path="/categories/2" element={<PersonalizedGifts />} />
              <Route path="/categories/3" element={<GlassAndAcrylics />} />
              <Route path="/categories/4" element={<EngraveableMetals />} />
              <Route path="/categories/5" element={<Sublimation />} />
              <Route path="/categories/6" element={<LaserableLeather />} />
            </Route>
      </Routes>
    </Router>
  );
}

export default App;
