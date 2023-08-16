import React, {useState, useEffect} from 'react';
import './App.css';
import Navbar from './Components/Navbar/Navbar'; 
import { BrowserRouter, Routes } from 'react-router-dom';
// import LandingPage from './components/LandingPage';
import LoadingLogo from './Components/LoadingLogo/LoadingLogo';
// import Landing

const App = ()=> {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(()=>{
    setTimeout(()=>{
      setIsLoading(false);
    }, 2000);
  }, []);
  return (
    <div className="App">
        <BrowserRouter>
        {isLoading ? (
          <LoadingLogo/>
        ) : (
          <Routes exact path = '/Navbar' component={Navbar}/>
          )}
          <Navbar />
        </BrowserRouter>
    </div>
  );
}

export default App;
