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

import OrderHistory from '../pages/user/components/OrderHistory';
import UserInfo from '../pages/user/components/UserInfo';
import Coupons from '../pages/user/components/Coupons';
import ChangePassword from '../pages/user/components/ChangePassword';

import MainLayout from '../components/Layout/MainLayout';
import CartLayout from '../components/Layout/CartLayout';
import UserLayout from '../components/Layout/UserLayout';
import ShopLayout from '../components/Layout/ShopLayout';

import ProtectedRoute from './ProtectedRoute';

const AppRouter = () => {
  return (
    <Router>
      <Routes>
        <Route path='/*' element={<Navigate replace to='/' />} />
        <Route path='/' element={<MainLayout />}>
          <Route index element={<Home />} />
          <Route path='shop' element={<Shop />} />
          <Route path='product/:id' element={<Product />} />
        </Route>

        <Route
          path='/shop'
          element={
            <ProtectedRoute isPrivate={false}>
              <ShopLayout />
            </ProtectedRoute>
          }
        >
          <Route index element={<Shop />} />
        </Route>

        <Route
          path='/cart'
          element={
            <ProtectedRoute isPrivate={false}>
              <CartLayout />
            </ProtectedRoute>
          }
        >
          <Route index element={<Cart />} />
          <Route path='checkout' element={<Checkout />} />
        </Route>

        <Route
          path='/user/*'
          element={
            <ProtectedRoute isPrivate={true}>
              <UserLayout />
            </ProtectedRoute>
          }
        >
          <Route index element={<User />} />
          <Route path='information' element={<UserInfo />} />
          <Route path='coupons' element={<Coupons />} />
          <Route path='order-history' element={<OrderHistory />} />
          <Route path='security' element={<ChangePassword />} />
        </Route>

        <Route path='/login' element={<SignIn />} />
        <Route path='/register' element={<SignUp />} />
      </Routes>
    </Router>
  );
};

export default AppRouter;
