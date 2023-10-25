
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import Projects from './pages/Projects';
import DashBoard from './pages/DashBoard';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/login' element={<Login/>} />
        <Route path='/register' element={<Register/>} />
        <Route path='/project' element={<Projects/>} />
        <Route path='/Dashboard' element={<DashBoard/>} />
      </Routes>
      <Footer/>

    </div>
  );
}

export default App;
