from fastapi import APIRouter, HTTPException
from database import employee_collection
from schemas import Employee


router = APIRouter()


@router.post("/")
async def create_employee(employee: Employee):
    exists = await employee_collection.find_one({"employee_id": employee.employee_id})
    if exists:
        raise HTTPException(status_code=400, detail="Employee already exists")

    await employee_collection.insert_one(employee.dict())
    return employee


@router.get("/")
async def get_employees():
    employees = []
    async for emp in employee_collection.find():
        emp["_id"] = str(emp["_id"])
        employees.append(emp)
    return employees


@router.delete("/{employee_id}")
async def delete_employee(employee_id: str):
    result = await employee_collection.delete_one({"employee_id": employee_id})
    if result.deleted_count == 0:
        raise HTTPException(status_code=404, detail="Employee not found")
    return {"message": "Deleted"}
