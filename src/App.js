import { useEffect} from 'react';
import { useDispatch } from 'react-redux';
import { Route, Switch, Redirect } from 'react-router-dom';
import Layout from './components/layout/Layout';
import Meals from './pages/Meals';
import MealDetails from './pages/MealDetails';
import { requestMealsData } from './store/actions/meals-actions';

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(requestMealsData());
  }, [dispatch]);

  return (
    <>
      <Layout>
        <Switch>
          <Route path='/' exact>
            <Redirect to='/meals' />
          </Route>
          <Route path='/meals' exact>
            <Meals />
          </Route>
          <Route path='/meals/:id'>
            <MealDetails />
          </Route>
        </Switch>
      </Layout>
    </>
  );
}

export default App;
