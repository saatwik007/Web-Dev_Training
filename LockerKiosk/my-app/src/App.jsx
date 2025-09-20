import React, { useState } from "react";



import HomeScreen from "./components/HomeScreen";
import RentLockerScreen from "./components/RentLockerScreen";
import BookLockerScreen from "./components/BookLockerScreen";
// import LockerTimerScreen from "./components/LockerTimerScreen";




import './App.css'
import './index.css'; // or './App.css'
function App() {
 const [screen, setScreen] = useState("home");
  const [selectedLocker, setSelectedLocker] = useState(null);
  const [userData, setUserData] = useState(null);

  return (
    <>
      {screen === "home" && <HomeScreen onNavigate={setScreen} />}
      {screen === "rent" && (
        <RentLockerScreen
          onBack={() => setScreen("home")}
          onLockerSelect={id => {
            setSelectedLocker(id);
            setScreen("book");
          }}
        />
      )}
      {screen === "book" && (
        <BookLockerScreen
          lockerId={selectedLocker}
          onBack={() => setScreen("rent")}
          onOtpValidated={data => {
            setUserData(data);
            setScreen("timer");
          }}
        />
      )}
      {screen === "timer" && (
        <LockerTimerScreen
          lockerId={selectedLocker}
          userData={userData}
          onBack={() => setScreen("home")}
        />
      )}
    </>
  );
}

export default App;