from fastapi import APIRouter
from database import attendance_collection
from schemas import Attendance
from datetime import datetime


router = APIRouter()

@router.post("/")
async def mark_attendance(att: Attendance):
    data = att.dict()
    data["date"] = datetime.now().strftime("%Y-%m-%d")

    await attendance_collection.insert_one(data)
    return {"message": "Attendance marked"}

@router.get("/")
async def get_all_attendance():
    records = []
    async for a in attendance_collection.find():
        a["_id"] = str(a["_id"])
        records.append(a)
    return records

@router.get("/{emp_id}")
async def get_employee_attendance(emp_id: str):
    records = []
    async for a in attendance_collection.find({"employee_id": emp_id}):
        a["_id"] = str(a["_id"])
        records.append(a)
    return records
