from .base import (
  BusinessException,
  NotFoundException 
)

class ProductBusinessException(BusinessException):
  """product Business exception"""

class ProductNotFoundException(NotFoundException):
  def __init__(self, product_id: str):
    super().__init__(entity_type="Product", entity_id=product_id)
