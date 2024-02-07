from decimal import Decimal

from typing import NamedTuple

from ....core import ProductStatuses


class UpdateProductRequestElement(NamedTuple):
  product_id: str
  user_id: str
  name: str
  description: str | None
  price: Decimal
  location: str
  status: ProductStatuses
  is_available: bool


class ProductIdRequestElement(NamedTuple):
  product_id: str


class UpdateProductRequest(NamedTuple):
  product: UpdateProductRequestElement
  product_id: ProductIdRequestElement
