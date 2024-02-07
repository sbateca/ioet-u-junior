from typing import Optional, List

from app.src.exceptions import (
  ProductNotFoundException,
  ProductRepositoryException
)

from app.src.core.models import Product
from app.src.repositories import ProductRepository

from .request import FindProductByStatusRequest
from .response import FindProductByStatusResponse


class FindProductByStatus:
  def __init__(self, product_repository: ProductRepository) -> None:
    self.product_repository = product_repository

  def __verify_product_exists(self, product: Optional[List[Product]], request_entity_id: str) -> None:
    if product is None:
      raise ProductNotFoundException(product_id=request_entity_id)
    
  def __call__(self, request: FindProductByStatusRequest) -> FindProductByStatusResponse:
    try:
      products = self.product_repository.find_by_status(request.status)
      self.__verify_product_exists(products, request_entity_id=request.status)
      return FindProductByStatusResponse(products=products)
    except ProductRepositoryException as e:
      raise e
