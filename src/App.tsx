import * as React from "react";
import { Routes, Route, Link } from "react-router-dom";
import { SecurityProvider } from "./contexts/securityContext";
import Breweries from "./pages/Breweries";
import SignIn from "./pages/SignIn";

function App() {
  return (
    <SecurityProvider>
      <Routes>
        <Route path="/" element={<SignIn />} />
        <Route path="/breweries" element={<Breweries />} />
      </Routes>
    </SecurityProvider>
  );
}

export default App