import { BrowserRouter, Routes, Route } from "react-router-dom";
import Dashboard from "../Dashboard";
import { Header } from "../Header";

function AppRoutes() {
  return (
    <div className="app">
      <Header />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Dashboard />}></Route>
          <Route path="/dashboard" element={<Dashboard />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default AppRoutes;
