from typing import List
from app.src import ProductRepository, ProductRepositoryException, Product

class MemoryProductRepository(ProductRepository):
  products: List[Product]

  def __init__(self) -> None:
    self.products = []

  def list_all(self) -> List[Product]:
    try:
      return self.products
    except ProductRepositoryException:
      raise ProductRepositoryException(method="list")
