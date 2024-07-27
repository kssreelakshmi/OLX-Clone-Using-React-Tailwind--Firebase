import { Routes, Route } from 'react-router-dom';
import Home from './Pages/Home.jsx';
import Signup from './Pages/Signup';
import Login from './Pages/Login.jsx';
import Navbar from './Components/Navbar.jsx';
import Create from './Pages/Create.jsx'
import FooterComponent from './Components/FooterComponent.jsx';
import './index.css';
import ViewPost from './Pages/ViewPost.jsx';
import { PostProvider } from './store/FirebaseContext';
function App() {
  
  return (
    <>
      <PostProvider>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/signup' element={<Signup />} />
        <Route path='/login' element={<Login />} />
        <Route path='/create' element={<Create />} />
        <Route path='/view' element={<ViewPost />} />
      </Routes>
      <FooterComponent />

      </PostProvider>
    </>
  );
}

export default App;
