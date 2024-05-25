import React from 'react';
import './App.css';
import Header from "./Header";

import {
  BrowserRouter as Router, Routes, Route
} from "react-router-dom";

function App() {
  return (
    <div className="app">
      <h1>
        Lets build slack
      </h1>
      <Router>
        <Routes>
            <Route path="/" element={<Header/>}>
            </Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
