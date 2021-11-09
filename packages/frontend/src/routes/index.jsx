import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from 'react-router-dom';

import Home from '../pages/home';
import Shop from '../pages/shop';
import User from '../pages/user';
import Checkout from '../pages/checkout';
import Cart from '../pages/cart';
import SignUp from '../pages/auth/signUp';
import SignIn from '../pages/auth/signIn';
import Product from '../pages/product';

const AppRouter = () => {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/*' element={<Navigate replace to='/' />} />
        <Route path='/shop' element={<Shop />} />
        <Route path='/user' element={<User />} />
        <Route path='/cart' element={<Cart />} />
        <Route path='/checkout' element={<Checkout />} />
        <Route path='/login' element={<SignIn />} />
        <Route path='/register' element={<SignUp />} />
        <Route path='/product/:id' element={<Product />} />
      </Routes>
    </Router>
  );
};

export default AppRouter;
