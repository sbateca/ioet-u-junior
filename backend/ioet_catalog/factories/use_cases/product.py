from app.src.repositories import ProductRepository
from factories.repositories import sql_product_repository
from app.src.use_cases import ListProducts

def get_product_repository() -> ProductRepository:
  return sql_product_repository()

def list_product_use_case() -> ListProducts:
  return ListProducts(get_product_repository())
