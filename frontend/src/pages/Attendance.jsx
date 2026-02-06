import { useEffect, useState } from "react";
import axios from "axios";
import { LineChart, Line, XAxis, YAxis, Tooltip, CartesianGrid } from "recharts";
import jsPDF from "jspdf";
import "jspdf-autotable";

const API = "http://127.0.0.1:8000";

export default function Attendance() {

  const [employees, setEmployees] = useState([]);
  const [selected, setSelected] = useState("");
  const [records, setRecords] = useState([]);

  useEffect(() => {
    fetchEmployees();
  }, []);

  const fetchEmployees = async () => {
    const res = await axios.get(`${API}/employees/`);
    setEmployees(res.data);
  };

  const fetchAttendance = async (id) => {
    const res = await axios.get(`${API}/attendance/${id}`);
    setRecords(res.data);
  };

  const markPresent = async () => {
    if (!selected) return alert("Select employee");

    await axios.post(`${API}/attendance/`, {
      employee_id: selected,
      status: "Present"
    });

    fetchAttendance(selected);
  };

  const exportPDF = () => {
    const doc = new jsPDF();
    doc.text("Attendance Report", 14, 15);

    doc.autoTable({
      head: [["Date", "Status"]],
      body: records.map(r => [r.date, r.status]),
      startY: 25
    });

    doc.save("attendance.pdf");
  };

  const chartData = records.map((r, i) => ({
    day: i + 1,
    present: r.status === "Present" ? 1 : 0
  }));

  return (
    <div>

      <h1>Attendance</h1>

      <div style={{ display: "flex", gap: 10 }}>

        <select onChange={(e) => {
          setSelected(e.target.value);
          fetchAttendance(e.target.value);
        }}>
          <option value="">Select Employee</option>

          {employees.map(e => (
            <option key={e.employee_id} value={e.employee_id}>
              {e.full_name}
            </option>
          ))}
        </select>

        <button onClick={markPresent}>Mark Present</button>

        <button onClick={exportPDF}>Export PDF</button>

      </div>

      {/* Table */}

      <table>
        <thead>
          <tr>
            <th>Date</th>
            <th>Status</th>
          </tr>
        </thead>

        <tbody>
          {records.map((r, i) => (
            <tr key={i}>
              <td>{r.date}</td>
              <td>{r.status}</td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Chart */}

      <h3 style={{ marginTop: 40 }}>Attendance Trend</h3>

      <LineChart width={600} height={300} data={chartData}>
        <XAxis dataKey="day" />
        <YAxis allowDecimals={false} />
        <Tooltip />
        <CartesianGrid stroke="#ddd" />
        <Line type="monotone" dataKey="present" stroke="#2563eb" strokeWidth={3} />
      </LineChart>

    </div>
  );
}
