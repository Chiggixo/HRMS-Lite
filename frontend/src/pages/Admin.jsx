import { useEffect, useState } from "react";
import axios from "axios";

const API = https://hrms-lite-j98f.onrender.com;

export default function Admin() {

  const [employees, setEmployees] = useState([]);

  useEffect(() => {
    fetchEmployees();
  }, []);

  const fetchEmployees = async () => {
    const res = await axios.get(`${API}/employees/`);
    setEmployees(res.data);
  };

  const removeEmployee = async (id) => {
    await axios.delete(`${API}/employees/${id}`);
    fetchEmployees();
  };

  return (
    <div>

      <h1>Admin Panel</h1>

      <table className="table">

        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Dept</th>
            <th>Action</th>
          </tr>
        </thead>

        <tbody>
          {employees.map(e => (
            <tr key={e.employee_id}>
              <td>{e.employee_id}</td>
              <td>{e.full_name}</td>
              <td>{e.department}</td>

              <td>
                <button onClick={() => removeEmployee(e.employee_id)}>
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
