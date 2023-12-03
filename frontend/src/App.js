 import './App.css';
import Navbar1 from './Component/Navbar';
import { Route, Routes } from 'react-router-dom';
import Login from './Component/Login';
import Register from './Component/Register';
import Profile from './Component/Profile';
import AlertError from './Component/AlertError';

function App() {
  return (
     <>
     <Navbar1/>
     <AlertError/>
     <Routes>
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Register />} />
        <Route path='/profile' element={<Profile />} />
      </Routes>
     </>
  );
}

export default App;
