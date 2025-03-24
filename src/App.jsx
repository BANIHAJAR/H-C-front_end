import { Routes, Route } from 'react-router-dom';
import NavBar from './Components/navbar/Nav.jsx'
import Home from './Components/Home/App.jsx'
import Contact from './Components/Contact/Contact.jsx'
import Rooms from './Components/Rooms/Rooms.jsx'
import Footer from './Components/Footer/Footer.jsx'

function App() {
    return (
      <>
        <NavBar/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/rooms" element={<Rooms />} />
        </Routes>
        <Footer/>
      </>
    );
  }
  
  export default App;