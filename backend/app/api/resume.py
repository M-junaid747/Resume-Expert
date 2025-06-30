# app/api/resume.py
from fastapi import APIRouter, UploadFile, File, HTTPException
from fastapi.responses import JSONResponse
import os
import uuid
from app.db.database import SessionLocal
from app.models import models
import re
from docx import Document
import PyPDF2

router = APIRouter()

UPLOAD_DIR = "app/uploads/resumes"
os.makedirs(UPLOAD_DIR, exist_ok=True)

def extract_text(file_path: str) -> str:
    if file_path.endswith(".pdf"):
        with open(file_path, "rb") as f:
            reader = PyPDF2.PdfReader(f)
            return " ".join(page.extract_text() or "" for page in reader.pages)
    elif file_path.endswith(".docx"):
        doc = Document(file_path)
        return " ".join(p.text for p in doc.paragraphs)
    elif file_path.endswith(".txt"):
        with open(file_path, "r", encoding="utf-8") as f:
            return f.read()
    else:
        return ("File not found")

def extract_email(text: str) -> str:
    match = re.search(r"[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+", text)
    return match.group(0) if match else ""

@router.post("/upload-resume")
async def upload_resume(file: UploadFile = File(...)):
    try:
        file_ext = os.path.splitext(file.filename)[1]
        unique_filename = f"{uuid.uuid4()}{file_ext}"
        file_path = os.path.join(UPLOAD_DIR, unique_filename)

        with open(file_path, "wb") as buffer:
            buffer.write(await file.read())

        # Extract text and email from file
        text = extract_text(file_path)
        email = extract_email(text)

        # Save to DB
        db = SessionLocal()
        resume = models.Resume(
            file_path=file_path,
            text=text,
            email=email
        )
        db.add(resume)
        db.commit()
        db.refresh(resume)

        return JSONResponse(content={"message": "Resume upload and processing successful.", "status": "success", "email": email })

    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))
