import logo from './logo.svg';
import './App.css';
import Home from './Components/Home/Home';
import Weather from './Components/Weather/Weather.js';
import NavBar from './Components/NavBar/NavBar';
import Footer from './Components/Footer/Footer';
import { Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div>
      <NavBar />

      
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/weather" element={<Weather />} />

      </Routes>
      <p style={{color: "white", textAlign: "center", marginTop: "125px"}}>Created by Rohan Kurella</p>
      {/* <Footer /> */}
    </div>
  );
}

export default App;
