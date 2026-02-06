HRMS-Lite – Full Stack Human Resource Management System
HRMS-Lite is a lightweight, production-ready Human Resource Management System built using **FastAPI**, **MongoDB**, and **React (Vite)**. The system provides employee management, attendance tracking, analytics dashboard, and PDF reporting through a modern responsive UI.

🚀 Features
Employee CRUD Management
Attendance Marking System
Dashboard Metrics (Employees, Attendance, Present Today)
Interactive Attendance Charts
PDF Export for Attendance Reports
Admin Panel (role-ready)
RESTful API Architecture
MongoDB Cloud Integration
Modular Frontend Routing

🛠 Tech Stack
Backend
- FastAPI
- MongoDB Atlas
- PyMongo
- Pydantic
- Uvicorn

Frontend
- React + Vite
- Axios
- Recharts
- jsPDF
- React Router

📂 Project Structure
```
HRMS-LITE/
│
├── backend/
│   ├── routes/
│   ├── database.py
│   ├── schemas.py
│   ├── main.py
│   └── .env
│
└── frontend/
    ├── src/
    │   ├── pages/
    │   ├── components/
    │   └── App.jsx
    └── package.json
```

⚙️ Setup Instructions

# Backend

```bash
cd backend
python -m venv .venv
.venv\Scripts\activate
pip install -r requirements.txt
uvicorn main:app --reload
```

Create `.env` inside backend:

```
MONGODB_URL=your_mongodb_connection_string
```

---

# Frontend

```bash
cd frontend
npm install
npm run dev
```

---

# 🌐 API Base URL

```
http://127.0.0.1:8000
```

Swagger Docs:

```
http://127.0.0.1:8000/docs
```

---

## 📄 Modules

* Dashboard Analytics
* Employees Management
* Attendance Tracking
* Admin Panel
* PDF Export

---

# 📌 Future Enhancements
- JWT Authentication
- Role-Based Access Control
- Payroll Module
- Leave Management
- Cloud Deployment

---

# 👨‍💻 Developer

Chirag Kumar
Final Year CSE (AI & ML)
Full Stack + ML Engineer

