from typing import List

from fastapi import APIRouter, Depends

from app.src.use_cases import ListProducts, ListProductResponse
from factories.use_cases import list_product_use_case
from app.src.core.models import Product

product_router = APIRouter(prefix="/products")

@product_router.get("/", response_model=ListProductResponse)
async def get_products(
    use_case: ListProducts = Depends(list_product_use_case)
) -> ListProductResponse:
    response = use_case()
    return response
