from fastapi import FastAPI
from app.routes import resume_endpoint, jd_endpoint

app = FastAPI()

@app.get("/")
async def root():
    return {"message": "Streamline your career development with Resume Expert"}

app.include_router(resume_endpoint.router, prefix="/resume", tags=["Resume"])
app.include_router(jd_endpoint.router, prefix="/jd", tags=["Job Description"])

from app.models.db import Base, engine
Base.metadata.create_all(bind=engine)

