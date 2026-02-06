import { Link } from "react-router-dom";

export default function Sidebar() {
  return (
    <div style={{
      width: 220,
      background: "#1e293b",
      color: "white",
      padding: 20
    }}>

      <h2>HRMS</h2>

      <nav style={{ marginTop: 30, display: "flex", flexDirection: "column", gap: 15 }}>

        <Link to="/" style={link}>Dashboard</Link>
        <Link to="/employees" style={link}>Employees</Link>
        <Link to="/attendance" style={link}>Attendance</Link>
        <Link to="/admin" style={link}>Admin</Link>

      </nav>
    </div>
  );
}

const link = {
  color: "white",
  textDecoration: "none",
  fontSize: 16
};
