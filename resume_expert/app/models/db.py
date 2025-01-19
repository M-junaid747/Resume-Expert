from sqlalchemy import create_engine
from sqlalchemy.ext.declarative import declarative_base
from sqlalchemy.orm import sessionmaker

DATABASE_URL = "postgresql://postgres:Postgresql@2002@localhost/resume-expert"

engine = create_engine(DATABASE_URL)
SessionLocal = sessionmaker(autocommit=False, autoflush=False, bind=engine)
Base = declarative_base()

def get_db():
    db = SessionLocal()
    try:
        yield db
    finally:
        db.close()


from sqlalchemy import Column, Integer, String,JSON

class Resume(Base):
    __tablename__ = "resumes"
    id = Column(Integer, primary_key=True, index=True)
    name = Column(String, nullable=False)  # Candidate's name
    email = Column(String, nullable=False)  # Candidate's email
    file_path = Column(String, nullable=False)  # Path to uploaded resume


class JobDescription(Base):
    __tablename__ = "job_descriptions"
    id = Column(Integer, primary_key=True, index=True)
    title = Column(String, nullable=False)  # Job title
    description = Column(JSON, nullable=False)  # Parsed job description
