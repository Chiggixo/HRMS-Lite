from motor.motor_asyncio import AsyncIOMotorClient
from dotenv import load_dotenv
import os
from pathlib import Path

# Force-load backend/.env
env_path = Path(__file__).resolve().parent / ".env"
load_dotenv(env_path)

MONGODB_URL = os.getenv("MONGODB_URL")

if not MONGODB_URL:
    raise Exception("MONGODB_URL not found in backend/.env")

client = AsyncIOMotorClient(MONGODB_URL)

db = client["hrms"]

employee_collection = db["employees"]
attendance_collection = db["attendance"]
