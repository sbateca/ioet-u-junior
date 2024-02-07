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
    try:
      product_to_create = ProductSchema(
        product_id = product.product_id,
        user_id = product.user_id,
        name = product.name,
        description = product.description,
        price = product.price,
        location = product.location,
        status = product.status,
        is_available = product.is_available
      )
      with self.session as session:
        session.add(product_to_create)
        session.commit()
      return product
    except Exception:
      self.session.rollback()
      raise ProductRepositoryException(method="create")

  def get_by_id(self, product_id: str) -> Optional[Product]:
    try:
      with self.session as session:
        product = (
          session.query(ProductSchema).filter(ProductSchema.product_id == product_id).first()
        )
        if product is None:
          return None
        return Product(
          product_id = str(product.product_id),
          user_id = str(product.user_id),
          name = str(product.name),
          description = str(product.description),
          price = Decimal(product.price),
          location = str(product.location),
          status = str(product.status),
          is_available = bool(product.is_available)
        )
    except Exception:
      self.session.rollback()
      raise ProductRepositoryException(method="find")

  def edit(self, product_id: str, product: Product) -> Product:
    try:
      with self.session as session:
        product_to_update = (
          session.query(ProductSchema).filter(ProductSchema.product_id == product_id).first()
        )
        product_to_update.product_id = product.product_id
        product_to_update.user_id = product.user_id
        product_to_update.name = product.name
        product_to_update.description = product.description
        product_to_update.price = product.price
        product_to_update.location = product.location
        product_to_update.status = product.status
        product_to_update.is_available = product.is_available
        session.commit()
      return product
    except Exception:
      self.session.rollback()
      raise ProductRepositoryException(method="edit")

  def delete(self, product_id: str) -> Product:
    try:
      with self.session as session:
        product_to_delete = (
          session.query(ProductSchema).filter(ProductSchema.product_id == product_id).first()
        )
        session.delete(product_to_delete)
        session.commit()
      return Product(
        product_id = str(product_to_delete.product_id),
        user_id = str(product_to_delete.user_id),
        name = str(product_to_delete.name),
        description = str(product_to_delete.description),
        price = Decimal(product_to_delete.price),
        location = str(product_to_delete.location),
        status = str(product_to_delete.status),
        is_available = bool(product_to_delete.is_available)
      )
    except Exception:
      self.session.rollback()
      raise ProductRepositoryException(method="delete")
