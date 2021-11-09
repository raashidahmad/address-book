import './App.css';
import { Route, Routes, Outlet } from 'react-router-dom';
import ContactList from './pages/ContactList';
import NewContactPage from './pages/NewContact';
import LoginPage from './pages/Login';
import Layout from './components/layout/Layout';
import { ProtectedRoute } from './ProtectedRoute';
import { AuthProvider } from './contexts/contexts';
import ProfilePage from './pages/Profile';

function App() {
  /*
  Nested routes for protected
  <ProtectedRoute path="user" element={<Outlet />}>
  <Route path="/" element={<Navigate to="profile" replace />} />

  <Route path="profile" element={<Outlet />}>
    <Route path="/" element={<ViewUserProfile />} />
    <Route path="create" element={<CreateUserProfile />} />
    <Route path="update" element={<UpdateUserProfile />} />
  </Route>
</ProtectedRoute>

Nested routes general
<Route element={<MainContainer />}>
        <Route path="/" element={<Index />} />
  */
  return (
    <AuthProvider>
      <Layout>
        <div className="container margin-top-20">
          <Routes>
            <Route path='/login' element={<LoginPage />} />
            <Route path='/' element={<ContactList title="My Address List" />} />
            <Route path='/new-address' element={<NewContactPage />} />
            <ProtectedRoute path="/profile" roles="[]" element={<ProfilePage />} />
          </Routes>
        </div>
      </Layout>
    </AuthProvider>
  );
}
export default App;
