import './App.css';
import { Route, Switch } from 'react-router-dom';
import MainNavigation from './components/MainNavigation';
import AddressList from './pages/AddressList';
import NewAddressPage from './pages/NewAddress';

function App() {
  return (
    <div>
      <MainNavigation />
      <div className="container margin-top-20">
        <Switch>
          <Route path='/' exact>
            <AddressList title="My Address List" />
          </Route>
          <Route path='/new-address'>
            <NewAddressPage />
          </Route>
        </Switch>
      </div>
    </div>
  );
}
export default App;
