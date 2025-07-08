import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/home/Home';
import ThingsToDo from './pages/Things_to_do/ThingsToDo';
import Hotel from './pages/hotels/Hotel';
import Guiders from './pages/guiders/Guiders';
import RentalCars from './pages/rental_cars/RentalCars';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

function App() {
  return (
    <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/things-to-do" element={<ThingsToDo />} />
          <Route path="/hotels" element={<Hotel />} /> 
          <Route path="/guiders" element={<Guiders />} />
          <Route path="/rental-cars" element={<RentalCars />} /> 
        </Routes>
      <Footer/>
    </Router>
  );
}

export default App;