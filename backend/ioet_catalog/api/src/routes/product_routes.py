from fastapi import APIRouter, Depends

from app.src.use_cases import (
    ListProducts, 
    ListProductResponse, 
    FindProductById, 
    FindProductByIdResponse, 
    FindProductByIdRequest, 
    CreateProduct, 
    CreateProductResponse, 
    CreateProductRequest,
    UpdateProduct,
    UpdateProductRequest,
    UpdateProductResponse,
    UpdateProductRequestElement,
    ProductIdRequestElement,
    DeleteProduct,
    DeleteProductRequest,
    FindProductByStatus,
    FindProductByStatusRequest
)
from ..dtos import (
    ProductBase,
    ListProductResponseDto, 
    CreateProductRequestDto,
    CreateProductResponseDto,
    FindProductByIdResponseDto,
    UpdateProductRequestDto,
    UpdateProductResponseDto,
    DeleteProductResponseDto,
    FindProductByStatusResponseDto
)
from factories.use_cases import (
    list_product_use_case, 
    find_product_by_id_use_case,
    create_product_use_case,
    update_product_use_case,
    delete_product_use_case,
    find_product_by_status_use_case
)

product_router = APIRouter(prefix="/products")

@product_router.get("/", response_model=ListProductResponseDto)
async def get_products(
    use_case: ListProducts = Depends(list_product_use_case)
) -> ListProductResponse:
    response = use_case()
    response_dto: ListProductResponseDto = ListProductResponseDto(
        products= [ProductBase(
            product_id=product.product_id,
            user_id=product.user_id,
            name=product.name,
            description=product.description,
            price=product.price,
            location=product.location,
            status=product.status.value,
            is_available=product.is_available
            ) for product in response.products]
    )
    return response_dto

@product_router.get("/{product_id}", response_model=FindProductByIdResponseDto)
async def get_product_by_id(
    product_id: str,
    use_case: FindProductById = Depends(find_product_by_id_use_case)
) -> FindProductByIdResponse:
    response = use_case(FindProductByIdRequest(product_id=product_id))
    response_dto: FindProductByIdResponseDto = FindProductByIdResponseDto(**response._asdict())
    return response_dto

@product_router.post("/", response_model=CreateProductResponseDto)
async def create_product(
    request: CreateProductRequestDto,
    use_case: CreateProduct = Depends(create_product_use_case)
) -> CreateProductResponse:
    response = use_case(CreateProductRequest(
        product_id=request.product_id, 
        user_id=request.user_id, 
        name=request.name, 
        description=request.description, 
        price=request.price, 
        location=request.location, 
        status=request.status, 
        is_available=request.is_available
    ))
    response_dto: CreateProductResponseDto = CreateProductResponseDto(**response._asdict())
    return response_dto

@product_router.put("/{product_id}", response_model=UpdateProductResponseDto)
async def update_product(
    product_id: str,
    request: UpdateProductRequestDto,
    use_case: UpdateProduct = Depends(update_product_use_case)
) -> UpdateProductResponse:
    product_request_element = UpdateProductRequestElement(
        product_id=request.product_id, 
        user_id=request.user_id, 
        name=request.name, 
        description=request.description, 
        price=request.price, 
        location=request.location, 
        status=request.status, 
        is_available=request.is_available
    )
    product_id_request_element = ProductIdRequestElement(product_id=product_id)
    update_response = use_case(UpdateProductRequest(
        product=product_request_element,
        product_id=product_id_request_element
    ))
    response_dto: UpdateProductResponseDto = UpdateProductResponseDto(**update_response._asdict())
    return response_dto

@product_router.delete("/{product_id}", response_model=DeleteProductResponseDto)
async def delete_product(
    product_id: str,
    use_case: DeleteProduct = Depends(delete_product_use_case)
) -> DeleteProductResponseDto:
    delete_response = use_case(DeleteProductRequest(product_id=product_id))
    response_dto: DeleteProductResponseDto = DeleteProductResponseDto(**delete_response._asdict())
    return response_dto

@product_router.get("/status/{status}", response_model=FindProductByStatusResponseDto)
async def find_product_by_status(
    status: str,
    use_case: FindProductByStatus=Depends(find_product_by_status_use_case)
) -> FindProductByStatusResponseDto:
    response = use_case(FindProductByStatusRequest(status=status))
    response_dto: FindProductByStatusResponseDto = FindProductByStatusResponseDto(
        products= [ProductBase(
            product_id=product.product_id,
            user_id=product.user_id,
            name=product.name,
            description=product.description,
            price=product.price,
            location=product.location,
            status=product.status,
            is_available=product.is_available
            ) for product in response.products]
    )
    return response_dto
