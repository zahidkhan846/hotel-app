// import './App.css';
import React from "react";
import { Switch, Route } from "react-router-dom";
import Home from "./containers/Home/Home";
import NotFound from "./components/NotFound/NotFound";
import Rooms from "./containers/Rooms/Rooms";
import SingleRoom from "./containers/SingleRoom/SingleRoom";
import NavBar from "./components/NavBar/NavBar";
import "./App.css";

function App() {
  return (
    <>
      <NavBar />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/rooms" exact component={Rooms} />
        <Route path="/rooms/:selectedRoom" exact component={SingleRoom} />
        <Route component={NotFound} />
      </Switch>
    </>
  );
}

export default App;
