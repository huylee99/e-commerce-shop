import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

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
      <Switch>
        <Route path='/' exact component={Home} />
        <Route path='/shop' exact component={Shop} />
        <Route path='/user' exact component={User} />
        <Route path='/cart' exact component={Cart} />
        <Route path='/cart/checkout' exact component={Checkout} />
        <Route path='/register' exact component={SignUp} />
        <Route path='/login' exact component={SignIn} />
        <Route path='/product' exact component={Product} />
      </Switch>
    </Router>
  );
};

export default AppRouter;
