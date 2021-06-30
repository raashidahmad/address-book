import { Route, Switch } from 'react-router-dom';
import './App.css';
import AddressList from './pages/AddressList';

function App() {
  return (
    <Switch>
      <Route Path="/">
        <AddressList title="My All Contacts List" />
      </Route>
      <Route Path="/new-address">

      </Route>
    </Switch>
  );
}
export default App;
