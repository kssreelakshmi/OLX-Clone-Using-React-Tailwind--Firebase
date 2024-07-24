// src/App.js
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Pages/Home.jsx';
import Signup from './Pages/Signup';
import Login from './Pages/Login.jsx';
import Navbar from './Components/Navbar.jsx';
import Create from './Pages/Create.jsx'
import FooterComponent from './Components/FooterComponent.jsx';
import './index.css';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/signup' element={<Signup />} />
        <Route path='/login' element={<Login />} />
        <Route path='/create' element={<Create />} />
      </Routes>
      <FooterComponent />
    </Router>
  );
}

export default App;
