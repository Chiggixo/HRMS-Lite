from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from backend.routes.employees import router as employee_router
from backend.routes.attendance import router as attendance_router

app = FastAPI(title="HRMS Lite API")

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


@app.get("/")
def root():
    return {"message": "HRMS Lite Backend Running"}


app.include_router(employee_router, prefix="/employees", tags=["Employees"])
app.include_router(attendance_router, prefix="/attendance", tags=["Attendance"])
