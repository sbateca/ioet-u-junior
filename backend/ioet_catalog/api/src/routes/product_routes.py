from typing import List

from fastapi import APIRouter, Depends

from app.src.use_cases import ListProducts, ListProductResponse, FindProductById, FindProductByIdResponse, FindProductByIdRequest
from factories.use_cases import list_product_use_case, find_product_by_id_use_case
from app.src.core.models import Product

product_router = APIRouter(prefix="/products")

@product_router.get("/", response_model=ListProductResponse)
async def get_products(
    use_case: ListProducts = Depends(list_product_use_case)
) -> ListProductResponse:
    response = use_case()
    return response

@product_router.get("/{product_id}", response_model=FindProductByIdResponse)
async def get_product_by_id(
    product_id: str,
    use_case: FindProductById = Depends(find_product_by_id_use_case)
) -> FindProductByIdResponse:
    response = use_case(FindProductByIdRequest(product_id=product_id))
    return response
