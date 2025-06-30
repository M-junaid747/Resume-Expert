# app/models/models.py
from sqlalchemy import Column, Integer, String, Text
from app.db.database import Base

class Resume(Base):
    __tablename__ = "resumes"

    id = Column(Integer, primary_key=True, index=True)
    file_path = Column(String, nullable=False)
    text = Column(Text, nullable=False)
    email = Column(String, nullable=True)


class JobDescription(Base):
    __tablename__ = "job_descriptions"

    id = Column(Integer, primary_key=True, index=True)
    title = Column(String, nullable=False)
    text = Column(Text, nullable=False)
