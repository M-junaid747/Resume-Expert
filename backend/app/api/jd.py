# app/api/job.py
from fastapi import APIRouter, HTTPException
from fastapi.responses import JSONResponse
from app.schemas.schemas import JobDescriptionCreate
from app.models import models
from app.db.database import SessionLocal

router = APIRouter()

@router.post("/upload-jd")
def upload_job_description(payload: JobDescriptionCreate):
    try:
        db = SessionLocal()
        jd = models.JobDescription(
            title=payload.title,
            text=payload.text
        )
        db.add(jd)
        db.commit()
        db.refresh(jd)

        return JSONResponse(content={"message": "Job description upload successful.", "status": "success"})

    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))
