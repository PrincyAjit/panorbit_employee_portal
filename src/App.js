import React, { createContext, useState, useContext } from "react";
import {
  BrowserRouter,
  Routes,
  Route,
  Navigate,
  useLocation,
} from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import UserPage from "./pages/UserPage";
import UserProfile from "./components/UserProfile";
import ComingSoon from "./components/ComingSoon";

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
