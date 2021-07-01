import './App.css';
import { Route, Switch } from 'react-router-dom';
import ContactList from './pages/ContactList';
import NewContactPage from './pages/NewContact';
import Layout from './components/layout/Layout';

function App() {
  return (
    <Layout>
      <div className="container margin-top-20">
        <Switch>
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
