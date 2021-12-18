import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from 'react-router-dom';

import Home from '../pages/home';
import ErrorPage from '../pages/404';

// Shop
import Shop from '../pages/shop';
import Checkout from '../pages/checkout';
import Cart from '../pages/cart';
import Product from '../pages/product';
import Tracking from '../pages/tracking';
import OrderSuccess from '../pages/orderSuccess';

// Auth
import SignUp from '../pages/auth/signUp';
import SignIn from '../pages/auth/signIn';

// User
import User from '../pages/user';
import OrderHistory from '../pages/user/components/OrderHistory';
import UserInfo from '../pages/user/components/UserInfo';
import Coupons from '../pages/user/components/Coupons';
import ChangePassword from '../pages/user/components/ChangePassword';
import Welcome from '../pages/user/components/Welcome';

// Layout
import MainLayout from '../components/Layout/MainLayout';
import CartLayout from '../components/Layout/CartLayout';
import ShopLayout from '../components/Layout/ShopLayout';

import { CheckoutProvider } from '../pages/checkout/context/checkoutContext';

import ProtectedRoute from './ProtectedRoute';

const AppRouter = () => {
  return (
    <Router>
      <Routes>
        <Route path='/*' element={<Navigate replace to='/' />} />
        <Route
          path='/'
          element={
            <ProtectedRoute isPrivate={false}>
              <MainLayout />
            </ProtectedRoute>
          }
        >
          <Route index element={<Home />} />
          <Route path='product/:slug' element={<Product />} />
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
            <ProtectedRoute isPrivate={true}>
              <CartLayout />
            </ProtectedRoute>
          }
        >
          <Route index element={<Cart />} />
          <Route
            path='checkout'
            element={
              <CheckoutProvider>
                <Checkout />
              </CheckoutProvider>
            }
          />
        </Route>

        <Route
          path='/user/*'
          element={
            <ProtectedRoute isPrivate={true}>
              <User />
            </ProtectedRoute>
          }
        >
          <Route index element={<Welcome />} />
          <Route path='information' element={<UserInfo />} />
          <Route path='coupons' element={<Coupons />} />
          <Route path='order-history' element={<OrderHistory />} />
          <Route path='security' element={<ChangePassword />} />
        </Route>

        <Route
          path='/order'
          element={
            <ProtectedRoute isPrivate={true}>
              <ShopLayout />
            </ProtectedRoute>
          }
        >
          <Route path='success' element={<OrderSuccess />} />
        </Route>
        <Route path='/tracking' element={<Tracking />} />
        <Route path='/404' element={<ErrorPage />} />
        <Route path='/login' element={<SignIn />} />
        <Route path='/register' element={<SignUp />} />
      </Routes>
    </Router>
  );
};

export default AppRouter;
