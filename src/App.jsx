
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from '../src/Componenets/Navbar/Navbar'; 
import HomePage from './Componenets/Homepage/HomePage';
import AboutPage from './Componenets/Aboutpage/AboutPage';
import Explore from './Componenets/Explorepage/Explore'; 
import Contact from './Componenets/Contactpage/contact';
import Footer from '../src/Componenets/Footer/Footer';

const App = () => {
  return (
    <Router>
      <Navbar /> {/* Add Navbar here */}
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/Explore" element={<Explore />} />
        <Route path="/contact" element={<Contact />} />
        
      </Routes>
      <Footer/>
    </Router>
  );
};

export default App;
