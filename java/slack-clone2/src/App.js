import React from 'react';
import './App.css';
import styled from "styled-components";
import Header from "./components/Header";
import SideBar from "./components/SideBar";

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Chat from './components/Chat';

function App() {
  return (
    <div className="App">

      <Router>
        <>
          <Switch>
            <Route path="/" exact>
              <Header/>
              
              <AppBody>
                <SideBar/>
                <Switch>
                  <Route path="/" exact>
                    {/* Chat */}
                    <Chat/>
                  </Route>
                </Switch>
              </AppBody>

            </Route>
          </Switch>
        </>
      </Router>

    </div>
  );
}

export default App;

const AppBody = styled.div`
  display: flex;
  height: 100vh;
`;
