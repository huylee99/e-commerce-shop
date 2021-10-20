import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Home from '../pages/home';

const AppRouter = () => {
  return (
    <Router>
      <Switch>
        <Route path='/' component={Home} />
      </Switch>
    </Router>
  );
};

export default AppRouter;
