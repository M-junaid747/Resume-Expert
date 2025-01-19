from fastapi import APIRouter, Form, HTTPException
import os

router = APIRouter()

@router.post("/add-job-description/")
async def add_job_description(title: str = Form(...), description: str = Form(...)):
    # Save to database or preprocess as needed
    return {"message": "Job description added successfully", "title": title}
