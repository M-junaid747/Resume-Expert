from fastapi import APIRouter, UploadFile, Form, HTTPException
from app.utils.file_validation import validate_file
import os

router = APIRouter()

UPLOAD_DIR = "data/uploads/"

@router.post("/upload-resume/")
async def upload_resume(
    name: str = Form(...),
    email: str = Form(...),
    file: UploadFile = Form(...)
):
    try:
        validate_file(file.filename, file.size)
    except ValueError as e:
        raise HTTPException(status_code=400, detail=str(e))

    os.makedirs(UPLOAD_DIR, exist_ok=True)
    file_path = os.path.join(UPLOAD_DIR, file.filename)
    with open(file_path, "wb") as f:
        f.write(await file.read())
    
    # Save metadata to database (e.g., name, email, file_path)
    return {"message": "Resume uploaded successfully", "file_path": file_path}
