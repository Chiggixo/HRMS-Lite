import { useEffect, useState } from "react";
import axios from "axios";

const API = "https://hrms-lite-j98f.onrender.com";

export default function Employees() {
  const [employees, setEmployees] = useState([]);

  useEffect(() => {
    load();
  }, []);

  const load = async () => {
    const res = await axios.get(`${API}/employees/`);
    setEmployees(res.data);
  };

  const remove = async (id) => {
    await axios.delete(`${API}/employees/${id}`);
    load();
  };

  return (
    <div style={{ padding: 30 }}>

      <h1>Employees</h1>

      <table style={{
        width: "100%",
        marginTop: 20,
        borderCollapse: "collapse"
      }}>

        <thead>
          <tr style={{ background: "#2563eb", color: "white" }}>
            <th>ID</th>
            <th>Name</th>
            <th>Email</th>
            <th>Dept</th>
            <th>Action</th>
          </tr>
        </thead>

        <tbody>
          {employees.map(e => (
            <tr key={e.employee_id} style={{ borderBottom: "1px solid #ddd" }}>
              <td>{e.employee_id}</td>
              <td>{e.full_name}</td>
              <td>{e.email}</td>
              <td>{e.department}</td>
              <td>
                <button
                  onClick={() => remove(e.employee_id)}
                  style={{
                    background: "#dc2626",
                    color: "white",
                    border: "none",
                    padding: "6px 12px",
                    borderRadius: 6
                  }}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>

      </table>

    </div>
  );
}
