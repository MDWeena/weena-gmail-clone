import React from "react";
import Header from "./Header/Header";
import "./App.css";
import SideBar from "./SideBar/SideBar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Mail from "./AppBody/Mail";
import EmailList from "./AppBody/EmailList";

function App() {
  return (
    <Router>
      <div className="app">
        <Header />

        <div className="app__body">
          <SideBar />
          <Routes>
            <Route path="/mail" element={<Mail />} />
            <Route path="/" element={<EmailList />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
