import Home from './Home'
import Login from './Login';
import Signup from './Signup';
import Bookingform from './component/Host/Bookingform';
import Loginpage from './ui/Loginpage.tsx';
import DataTableDemo from './ui/Datatable.tsx';
import Sidebar from './ui/Navbar.tsx';

import { Routes, Route } from 'react-router-dom';
import HostLogin from './component/Host/HostLogin.tsx';
import HostSigin from './component/Host/HostSigin.tsx';
import Homepage from './Pages/Homepage.tsx';
import PublicNavbar from './component/public/Navbar.tsx';
import Wishlistspage from './Pages/Whislistspage.tsx';
import Layout from './component/Host/Layout.tsx';
import { useContext } from 'react';
import { ConditionContext } from './context/context.tsx';
import HostDashboard from './Pages/HostDashboard.tsx';
import Dashboard from './component/Host/Dashboard.tsx';
import Listings from './component/Host/Listings.tsx';
import AddHomePage from './Pages/AddHomePage.tsx';
import AddHomePage2 from './Pages/AddHomePage2.tsx';
import AddHomePage3 from './Pages/AddHomePage3.tsx';
import AddHomePage4 from './Pages/AddHomePage4.tsx';

function App() {
  const checkrole = useContext(ConditionContext)

  return checkrole === 'user' ? (
    
    <PublicNavbar>
      <Routes>
        <Route path="/" element={<Homepage />}></Route>
        <Route path="/host/login" element={<Home />}></Route>
        <Route path="/wish" element={<Wishlistspage />}></Route>
        
        <Route path="/login" element={<Login />}></Route>
        <Route path="/signup" element={<Signup />}></Route>
        <Route path="/bookingform" element={<Bookingform />}></Route>
        <Route path="/loginpage" element={<Loginpage />}></Route>
        <Route path="/data" element={<DataTableDemo />}></Route>
        <Route path="/side" element={<Sidebar />}></Route>
        
      </Routes>
    </PublicNavbar>
  ) : (
      <Layout>
      <Routes>
        <Route path="/host/dashboard" element={<HostDashboard />}></Route>
        <Route path='/host/listings' element={<Listings/>}></Route>
        <Route path="/add-homepage" element={<AddHomePage />}></Route>
        <Route path="/add-homepage-2" element={<AddHomePage2 />}></Route>
        <Route path="/add-homepage-3" element={<AddHomePage3 />}></Route>
        <Route path="/add-homepage-4" element={<AddHomePage4 />}></Route>
    
    </Routes>
    </Layout>
    
    
  )
  
}

export default App
