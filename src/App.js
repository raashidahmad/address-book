import './App.css';
import { Route, Switch } from 'react-router-dom';
import ContactList from './pages/ContactList';
import NewContactPage from './pages/NewContact';
import LoginPage from './pages/Login';
import Layout from './components/layout/Layout';
import { useState } from 'react';

function App() {
  const [isAuthorize, setAuthorized] = useState();

  return (
    <Layout>
      <div className="container margin-top-20">
        <Switch>
        <Route path='/login' exact>
            <LoginPage />
          </Route>
          <Route path='/' exact>
            <ContactList title="My Address List" />
          </Route>
          <Route path='/new-address'>
            <NewContactPage />
          </Route>
        </Switch>
      </div>
    </Layout>
  );
}
export default App;
