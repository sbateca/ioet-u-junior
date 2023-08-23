from fastapi import FastAPI

from .routes import health_check_router

api = FastAPI()
api.include_router(health_check_router, tags=["health check"])
