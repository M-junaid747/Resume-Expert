# app/schemas/schemas.py
from pydantic import BaseModel

class ResumeCreate(BaseModel):
    file_path: str
    text: str
    email: str | None = None

class JobDescriptionCreate(BaseModel):
    title: str
    text: str
