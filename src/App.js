
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';

import Projects from './pages/Projects';
import DashBoard from './pages/DashBoard';
import Footer from './components/Footer';
import Auth from './components/Auth';

function App() {
  return (
    <div className="App">
      
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/login' element={<Auth/>} />
        <Route path='/register' element={<Auth register />} />
        <Route path='/project' element={<Projects/>} />
        <Route path='/Dashboard' element={<DashBoard/>} />
      </Routes>
      <Footer/>

    </div>
  );
}

export default App;
