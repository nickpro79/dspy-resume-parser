from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from auth import models
from db.database import engine
from routers import authRouter,uploadRouter


models.Base.metadata.create_all(bind=engine)

app = FastAPI()

origins = ["http://localhost:5173"]
app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

app.include_router(authRouter.router)
app.include_router(uploadRouter.router)
