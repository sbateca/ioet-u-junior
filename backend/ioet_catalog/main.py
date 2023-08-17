import os
from fastapi import FastAPI, APIRouter
from fastapi_sqlalchemy import DBSessionMiddleware
from dotenv import load_dotenv

from ioet_catalog.api.routers.v1.main_router import router as main_router

load_dotenv(".env")

root_router = APIRouter()

app = FastAPI(title="ioet Catalog")
app.add_middleware(DBSessionMiddleware, db_url=os.environ["DATABASE_URL"])

app.include_router(main_router)
app.include_router(root_router)

if __name__ == "__main__":
    # Use this for debugging purposes only
    import uvicorn

    uvicorn.run(app, host="0.0.0.0", port=8001, log_level="debug")
