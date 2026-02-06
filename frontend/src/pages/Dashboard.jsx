import { useEffect, useState } from "react";
import axios from "axios";

const API = https://hrms-lite-j98f.onrender.com;

export default function Dashboard() {

  const [employees, setEmployees] = useState([]);
  const [attendance, setAttendance] = useState([]);

  useEffect(() => {
    load();
  }, []);

  const load = async () => {
    const e = await axios.get(`${API}/employees/`);
    setEmployees(e.data);

    let all = [];
    for (const emp of e.data) {
      const a = await axios.get(`${API}/attendance/${emp.employee_id}`);
      all.push(...a.data);
    }

    setAttendance(all);
  };

  const today = new Date().toISOString().slice(0,10);

  const presentToday =
    attendance.filter(a => a.date === today).length;

  return (
    <div>

      <h1>Dashboard</h1>

      <div className="cards">

        <Metric title="Employees" value={employees.length} />

        <Metric title="Attendance Records" value={attendance.length} />

        <Metric title="Present Today" value={presentToday} />

      </div>

    </div>
  );
}

function Metric({ title, value }) {
  return (
    <div className="card">
      <h4>{title}</h4>
      <h1>{value}</h1>
    </div>
  );
}
