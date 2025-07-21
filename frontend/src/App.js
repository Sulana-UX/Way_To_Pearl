import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Home from './pages/home/Home';
import ThingsToDo from './pages/Things_to_do/ThingsToDo';
import Hotel from './pages/hotels/Hotel';
import Guiders from './pages/guiders/Guiders';
import RentalCars from './pages/rental_cars/RentalCars';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Admin from './Dashboards/admin/Admin';
import Login from './pages/login/Login';
import Signup from './pages/signup/Signup';
import TuoristDashboard from './Dashboards/TuoristDashboard';
import Review from './pages/review/Review';


function AppContent() {
  const location = useLocation();
  const hideNavbar = location.pathname === '/tuorist-dashboard';
  return (
    <div>
      {!hideNavbar && <Navbar />}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/things-to-do" element={<ThingsToDo />} />
        <Route path="/hotels" element={<Hotel />} /> 
        <Route path="/guiders" element={<Guiders />} />
        <Route path="/rental-cars" element={<RentalCars />} />
        <Route path="/admin" element={<Admin />} /> 
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/tuorist-dashboard" element={<TuoristDashboard />} />
        <Route path="/review" element={<Review />} />
      </Routes>
      <Footer/>
    </div>
  );
}

export default function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}