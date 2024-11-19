import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './Pages/Login';
import User from './Pages/User';
import UserPage from './Pages/UserPage';
import Admin from './Pages/Admin';
import AdminPage from './Pages/AdminPage'; 

import { useSelector } from 'react-redux';
import Service from './Pages/Service';

const App = () => {
  const role = useSelector((state) => state.auth.role); // Get the role from Redux store

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        {role === 'user' && <Route path="/user" element={<User />} />}
        {role === 'admin' && <Route path="/admin" element={<Admin />} />}
        <Route path="/adminPage" element={<AdminPage />} /> {/* AdminPage Route */}

        <Route path="/user" element={<User />} />
        <Route path="/userpage" element={<UserPage />} />
        <Route path="/userpage" element={<Service />} />
      </Routes>
    </Router>
  );
};

export default App;
