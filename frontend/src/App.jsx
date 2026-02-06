import { Routes, Route } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import Dashboard from "./pages/Dashboard";
import Employees from "./pages/Employees";
import Attendance from "./pages/Attendance";
import Admin from "./pages/Admin";

export default function App() {
  return (
    <div className="layout">
      <Sidebar />

      <div className="content">
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/employees" element={<Employees />} />
          <Route path="/attendance" element={<Attendance />} />
          <Route path="/admin" element={<Admin />} />
        </Routes>
      </div>
    </div>
  );
}
