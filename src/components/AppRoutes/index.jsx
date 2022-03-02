import { BrowserRouter, Routes, Route } from "react-router-dom";
import Dashboard from "../Dashboard";
import Onboarding from "../Onboarding";
function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Onboarding />}></Route>
        <Route path="/dashboard" element={<Dashboard />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default AppRoutes;
