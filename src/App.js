import './App.css';
import { Route, Switch } from 'react-router-dom';
import AddressList from './pages/AddressList';
import NewAddressPage from './pages/NewAddress';
import Layout from './components/layout/Layout';

function App() {
  return (
    <Layout>
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
    </Layout>
  );
}
export default App;
