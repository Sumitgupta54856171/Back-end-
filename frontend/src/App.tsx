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
import AddHomePage5 from './Pages/AddHomePage5.tsx';
import AddHomePage6 from './Pages/AddHomePage6.tsx';
import AddHomePage7 from './Pages/AddHomePage7.tsx';
import AddHomePage8 from './Pages/AddHomePage8.tsx';
import AddHomeReviewPage from './Pages/AddHomeReviewPage.tsx';
import OnboardingLayout from './component/Host/OnboardingLayout.tsx';
import Reservation from './component/Host/Reservation.tsx';

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
    <Routes>
      {/* Onboarding flows rendered with OnboardingLayout to show the step sidebar */}
      <Route element={<OnboardingLayout />}>
        <Route path="/add-homepage" element={<AddHomePage />} />
        <Route path="/add-homepage-2" element={<AddHomePage2 />} />
        <Route path="/add-homepage-3" element={<AddHomePage3 />} />
        <Route path="/add-homepage-4" element={<AddHomePage4 />} />
        <Route path="/add-homepage-6" element={<AddHomePage6 />} />
        <Route path="/add-homepage-5" element={<AddHomePage5 />} />
        <Route path="/add-homepage-7" element={<AddHomePage7 />} />
        <Route path="/add-homepage-8" element={<AddHomePage8 />} />
      </Route>

      {/* Standalone Review Page (Includes its own layout as per the UI design mockup) */}
      <Route path="/add-home-review" element={<AddHomeReviewPage />} />
      
      {/* Host Dashboard routes wrapped in Layout */}
      <Route element={<Layout />}>
        <Route path="/" element={<HostDashboard />} />
        <Route path="/host/listings" element={<Listings />} />
        <Route path="/host/reservations" element={<Reservation />} />
      </Route>
    </Routes>
  )
  
}

export default App
