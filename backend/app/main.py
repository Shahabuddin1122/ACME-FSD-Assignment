from fastapi import FastAPI
from app.routes.generate_route import router as generate_route
from fastapi.middleware.cors import CORSMiddleware

app = FastAPI(
    title="Legal Document API",
    description="API for managing and retrieving legal documents and related information.",
    version="1.0.0",
    contact={
        "name": "Shahabuddin Akhon",
        "email": "shavoddin@gmail.com",
    },
    license_info={
        "name": "MIT License",
    },
)

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


app.include_router(generate_route)
