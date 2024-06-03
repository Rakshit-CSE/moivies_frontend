import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./Home";
import SingleMovie from "./SingleMovie";

import "./App.css";
import Login from "./pages/Login";
import Signup from "./pages/SignUp";
import FavoritesPage from "./pages/Fav";
import Navbar from "./pages/Navbar";

const App = () => {
  return (
    <>
      <Navbar/> 
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="movie/:id" element={<SingleMovie />} />
      <Route path="/fav" element={<FavoritesPage />} />
    </Routes>
    
    </>
  );
};

export default App;
