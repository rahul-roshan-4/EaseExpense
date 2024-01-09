import React from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Home from './components/Home/Home';
import Contact from './components/Dashboard/Contact';
import Feature from './components/Feature/Feature';
import Login from './components/Login/Login';
import { UserContextProvider } from './components/UserContext';
import NavigationBar from './components/Navbar/NavigationBar';
const App = () => {
  return (
    <>
      <BrowserRouter>
    <UserContextProvider>
        <NavigationBar/>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/feature" element={<Feature/>} />
          <Route path="/contact" element={<Contact/>} />
          <Route path="/login" element={<Login/>} />
        </Routes>

    
      </UserContextProvider>
      </BrowserRouter>
    </>
  );
};

export default App;
