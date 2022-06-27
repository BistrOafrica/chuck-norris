import React from "react";
import './Styles/App.css';
import {BrowserRouter as AppRouter, Routes as Switch, Route} from "react-router-dom";
import Login from "./Components/Accounts/Login";
import SignUp from "./Components/Accounts/SignUp";
import Home from "./Components/general/Home";

function App() {
  return (
    <div className="App">
      <AppRouter>
            <Switch>
                <Route path={"/login"} element={<Login/>}/>
                <Route path={"/signup"} element={<SignUp/>}/>
                <Route path={"/"} element={<Home/>}/>
            </Switch>
      </AppRouter>
    </div>
  );
}

export default App;
