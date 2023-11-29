
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import Projects from './pages/Projects';
import DashBoard from './pages/DashBoard';
import Footer from './components/Footer';
import Auth from './components/Auth';
import { useContext } from 'react';
import { tokenAuthorisationContext } from './contexts/TokenAuth';



function App() {

  const {isAuthorized,setisAuthorized} = useContext(tokenAuthorisationContext)
 
  return (
    <div className="App">
      
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/login' element={<Auth/>} />
        <Route path='/register' element={<Auth register />}/>
        <Route path='/project' element={isAuthorized?<Projects/>:<Home/>} />
        <Route path='/dashbord' element={isAuthorized?<DashBoard/>:<Home/>}/>
      </Routes>
      <Footer/>

    </div>
  );
}

export default App;
