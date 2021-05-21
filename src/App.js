/* eslint-disable */
import { Route, Switch, Redirect } from 'react-router-dom';
import Layout from './components/layout/Layout';
import Meals from './containers/Meals';
import MealDetails from './components/MealDetails';
import NotFound from './components/NotFound';
import CategoryFilter from './containers/CategoryFilter';


function App() {

  return (
    <>
      <Layout>
        <Switch>
          <Route path="/" exact>
            <Redirect to="/meals" />
          </Route>
          <Route path="/meals" exact>
            <CategoryFilter />
            <Meals />
          </Route>
          <Route path="/meals/:id">
            <MealDetails />
          </Route>
          <Route path="*">
            <NotFound />
          </Route>
        </Switch>
      </Layout>
    </>
  );
}

export default App;
