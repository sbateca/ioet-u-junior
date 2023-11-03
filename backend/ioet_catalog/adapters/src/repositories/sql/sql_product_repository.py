from typing import List, Optional
from decimal import Decimal
from sqlalchemy.orm import Session
from app.src import Product, ProductRepository, ProductRepositoryException
from .tables import ProductSchema

class SQLProductRepository(ProductRepository):
  def __init__(self, session: Session) -> None:
    self.session=session

  def list_all(self) -> List[Product]:
    try:
      with self.session as session:
        products = session.query(ProductSchema).all()
        if products is None:
          return []
        product_list = [
          Product(
            product_id = str(product.product_id),
            user_id = str(product.user_id),
            name = str(product.name),
            description = str(product.description),
            price = Decimal(product.price),
            location = str(product.location),
            status = str(product.status),
            is_available = bool(product.is_available)
          )
          for product in products
        ]
        return product_list
    except Exception:
      self.session.rollback()
      raise ProductRepositoryException(method="list")
    
  def create(self, product: Product) -> Product:
    # Needs Implementation
    pass
  
  def get_by_id(self, product_id: str) -> Optional[Product]:
    # Needs Implementation
    pass
  
  def edit(self, product: Product) -> Product:
    # Needs Implementation
    pass
  
  def delete(self, product_id: str) -> Product:
    # Needs Implementation
    pass

