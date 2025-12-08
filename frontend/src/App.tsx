
import './App.css'
import Home from './Home'
import Login from './Login';
import Signup from './Signup';
import Bookingform from './component/Host/Bookingform';
import Loginpage from './ui/Loginpage.tsx';
import DataTableDemo from './ui/Datatable.tsx';
import Sidebar from './ui/Navbar.tsx';

import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/signup" element={<Signup />}></Route>
        <Route path="/bookingform" element={<Bookingform />}></Route>
        <Route path="/loginpage" element={<Loginpage />}></Route>
        <Route path='/data' element={<DataTableDemo/>}></Route>
        <Route path='/side' element={<Sidebar/>}></Route>
      </Routes>
    </>
  )
}

export default App
