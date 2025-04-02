import React from "react";
import Signup from "./signup";
import { BrowserRouter as Router ,Routes,Route } from "react-router-dom";
import Login from "./login";
import Course from "./course";

function App() {
  return (
    <div>
    <h2>Admin Authentication</h2>
    <Router>
      <Routes>
        <Route path="/" element={<Login/>}/>
        <Route path="/login"  element={<Login/>}/>
        <Route path="/signin"  element={<Signup/>}/>
        <Route path="course"  element={<Course/>}/>
      </Routes>
    </Router>
  
     
    </div>
  );
}

export default App;
