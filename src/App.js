import React, { useState } from 'react';
import Nav from "./components/Nav";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Footer from "./components/Footer";
import Detail from "./components/Detail";
import Create from "./components/Create";
import Posts from "./components/Posts";
import Register from "./components/Register";
import Login from "./components/Login";
import LandingPage from './components/LandingPage';
import './App.css';

function App() {

  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const login = () => {
    setIsAuthenticated(true);
  };

  const logout = () => {
    setIsAuthenticated(false);
  };


  return (
    <div className='app_container'>
      <BrowserRouter>
    <Nav/>
    <Routes>
        <Route path="/" element={< LandingPage/>}></Route>
        <Route path="/posts" element={<Posts />}></Route>
        <Route path="/detail/:id" element={<Detail />}></Route>
        <Route path="/blog" element={<Create />}></Route>
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login login={login} />} />
        
    </Routes>
    <Footer />
    </BrowserRouter>
  </div>
    
   
  );
}

export default App;
