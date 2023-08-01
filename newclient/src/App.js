import './App.css';
import { Route, Routes, useLocation } from 'react-router-dom';
import axios from 'axios'
import Landing from './Components/landing/Landing.jsx'
import NavBar from './Components/navBar/NavBar.jsx'
import Home from './Components/home/Home';
import Detail from './Components/detail/Detail';
import Form from './Components/form/Form';

function App() {
  
  const location = useLocation ()
  
  
  return (
    <div className="App">

      {
        location.pathname !== "/"? <NavBar/> : null
      }

      <Routes>
        <Route path='/' element={<Landing/>} />
        <Route path='/home' element={<Home/>} />
        <Route path='/detail/:id' element={<Detail/>} />
        <Route path='/form' element={<Form/>} />

      </Routes>

    </div>
  );
}

export default App;
