import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Home from '../pages/home';
import Shop from '../pages/shop';
import User from '../pages/user';

const AppRouter = () => {
  return (
    <Router>
      <Switch>
        <Route path='/' exact component={Home} />
        <Route path='/shop' exact component={Shop} />
        <Route path='/user' exact component={User} />
      </Switch>
    </Router>
  );
};

export default AppRouter;
