from fastapi import APIRouter, Form, Depends, HTTPException
from sqlalchemy.orm import Session
from app.services.matching import match_resume_with_jd
from app.db.database import get_db
from app.models.models import Resume, JobDescription
import json

router = APIRouter()

@router.post("/match-resume")
def match_resume( email: str = Form(...),
                 jd_text: str = Form(...), db: Session = Depends(get_db)):
   # Get resume by email
    resume = db.query(Resume).filter(Resume.email == email).first()
   # job_desc = db.query(JobDescription).filter(JobDescription.title == jd_title).first()

    if not resume:
       raise HTTPException(status_code=404, detail="Resume not found for the provided email.")

    # Generate AI-based insights
    insights = match_resume_with_jd(resume.text, jd_text)

    return {
        "email": resume.email,
        #"jd_title": job_desc.title,
        "match_score": 80 + len(insights.get("skills_present", [])),  # example logic
        "skills_present": insights.get("skills_present", []),
        "skills_missing": insights.get("skills_missing", []),
        "recommended_skills": insights.get("recommended_skills", []),
        "suggested_courses": insights.get("suggested_courses", []),
       }
