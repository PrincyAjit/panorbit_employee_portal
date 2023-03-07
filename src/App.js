import React, { createContext, useState, useEffect } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { LandingPage, UserPage } from "./pages";

export const DataContext = createContext();
function App() {
  const [userDataInContext, setUserDataInContext] = useState([]);
  const fetchUserData = async () => {
    let dataReceived;
    try {
      const response = await fetch(" https://panorbit.in/api/users.json");
      dataReceived = await response.json();
      dataReceived = dataReceived?.users;
    } catch (e) {
      dataReceived = [];
    }
    return dataReceived;
  };
  useEffect(() => {
    fetchUserData().then((userDataReceived) => {
      setUserDataInContext(userDataReceived);
    });
  }, []);

  return (
    <DataContext.Provider value={{ userDataInContext, setUserDataInContext }}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Navigate to="/home" replace={true} />} />
          <Route path="*" element={<Navigate to="/home" replace={true} />} />
          <Route path="/home" element={<LandingPage />} />
          <Route path="/user" element={<UserPage />} />
        </Routes>
      </BrowserRouter>
    </DataContext.Provider>
  );
}

export default App;
