import './App.css';
import { Route, Routes } from 'react-router-dom';
import ContactList from './pages/ContactList';
import NewContactPage from './pages/NewContact';
import LoginPage from './pages/Login';
import Layout from './components/layout/Layout';
import ProfilePage from './pages/Profile';
import ProtectedRoute from './components/protectedroute/protectedroute';

function App() {
  
  return (
    <Layout>
      <div className="container margin-top-20">
        <Routes>
        <Route path='/login' element={<LoginPage />} />
          <Route path='/' element={<ContactList title="My Address List" />} />
          <Route path='/new-address' element={<NewContactPage />} />
          <ProtectedRoute path="profile" component={ProfilePage} />
        </Routes>
      </div>
    </Layout>
  );
}
export default App;
