import { Routes, Route } from 'react-router-dom';
import NavBar from './Components/navbar/Nav.jsx'
import Home from './Components/Home/App.jsx'
import Contact from './Components/Contact/Contact.jsx'
import Rooms from './Components/Rooms/Nav_Rooms.jsx'
import Double_Deluxe from './Components/Rooms/Double/Double_Deluxe.jsx'
import Double_Premium from './Components/Rooms/Double/Double_Premium.jsx'
import Single_Deluxe from './Components/Rooms/Single/Single_Deluxe.jsx'
import Single_Premium from './Components/Rooms/Single/Single_Premium.jsx'
import Footer from './Components/Footer/Footer.jsx'
import Galerie from './Components/Galerie/Galerie.jsx'

function App() {
    return (
      <>
        <NavBar/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/rooms" element={<Rooms />} />
          <Route path="/Double_Deluxe" element={<Double_Deluxe />} />
          <Route path="/Double_Premium" element={<Double_Premium />} />
          <Route path="/Single_Deluxe" element={<Single_Deluxe />} />
          <Route path="/Single_Premium" element={<Double_Deluxe />} />
          <Route path="/Galerie" element={<Galerie />} />
          
        </Routes>
        <Footer/>
      </>
    );
  }
  
  export default App;