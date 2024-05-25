import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from "../Header/Index"
import Footer from "../Footer/Index"
import Welcome from "../Welcome"
import Landing from "../Landing/Index"
import Login from "../Login"
import Signup from "../Signup"
import ErrorPage from "../ErrorPage"
import ForgetPassword from '../ForgetPassword';
import '../../App.css';

function App() {
  return (
    <Router>
      <Header/>

      <Routes>
        <Route exact path="/" element={<Landing/>} />
        <Route path="/welcome" element={<Welcome/>} />
        <Route path="/login" element={<Login/>} />
        <Route path="/signup" element={<Signup/>} />
        <Route path="/forgetpassword" element={<ForgetPassword/>}/>
        <Route path="*" element={<ErrorPage/>} />
      </Routes>

      <Footer/>
    </Router>
  );
}

export default App;
