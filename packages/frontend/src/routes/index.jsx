import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Home from '../pages/home';
import Shop from '../pages/shop';

const AppRouter = () => {
  return (
    <Router>
      <Switch>
        <Route path='/' exact component={Home} />
        <Route path='/shop' exact component={Shop} />
      </Switch>
    </Router>
  );
};

export default AppRouter;
