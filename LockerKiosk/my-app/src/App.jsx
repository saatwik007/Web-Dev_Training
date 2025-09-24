import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route, useNavigate } from "react-router-dom";

import HomeScreen from "./components/HomeScreen";
import RentLockerScreen from "./components/RentLockerScreen";
import BookLockerScreen from "./components/BookLockerScreen";
// import LockerTimerScreen from "./components/LockerTimerScreen";

import './App.css'
import './index.css';

function App() {
  const [selectedLocker, setSelectedLocker] = useState(null);
  const [userData, setUserData] = useState(null);

  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomeScreen />} />
        <Route
          path="/rent"
          element={
            <RentLockerScreen
              onLockerSelect={id => {
                setSelectedLocker(id);
                // Use navigation in the component to go to /book
              }}
            />
          }
        />
        <Route
          path="/book"
          element={
            <BookLockerScreen
              lockerId={selectedLocker}
              onOtpValidated={data => {
                setUserData(data);
                // Use navigation in the component to go to /timer
              }}
            />
          }
        />
        {/* 
        <Route
          path="/timer"
          element={
            <LockerTimerScreen
              lockerId={selectedLocker}
              userData={userData}
            />
          }
        /> 
        */}
      </Routes>
    </Router>
  );
}

export default App;