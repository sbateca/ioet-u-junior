from typing import NamedTuple, List

from app.src.core.models._product import Product


class FindProductByStatusResponse(NamedTuple):
  products: List[Product]
