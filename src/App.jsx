import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import Login from "./pages/Login/Login";
import Register from "./pages/Register/Register";
import Dashboard from "./pages/Dashboard/Dashboard";
import Footer from "./components/Footer/Footer";

import Demo from "./Demo/Demo";
import Match2 from "./Match/Match2";
import MatchMain from "./Match/MatchMain";



function App() {
  return (
    <Router>
     
      {/* <Match /> */}
      <Routes>

        <Route path='/' element={<Login />}/>
        <Route path='/register' element={<Register/>}/>
        <Route path='/home' element={<Dashboard />}/>
        <Route path='/demo' element={<Demo />}/>
      </Routes>
      <Footer />
      <Toaster position="top-center" />
      <MatchMain/>
     
    </Router>
  )

}

export default App;
