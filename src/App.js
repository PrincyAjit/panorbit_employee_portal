import React, { createContext, useState } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { LandingPage, UserPage } from "./pages";

export const DataContext = createContext();
function App() {
  const [userDataInContext, setUserDataInContext] = useState([]);
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
