# main.py
from fastapi import FastAPI
from app.api import resume, jd, match
from fastapi.middleware.cors import CORSMiddleware

app = FastAPI()

app.include_router(resume.router, prefix="/api")
app.include_router(jd.router, prefix="/api")
app.include_router(match.router, prefix="/api")

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # You can restrict this in production
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)