import pytest
from typing import List

from app.src import Product, ProductRepository, ProductRepositoryException
from app.src.core import ProductStatuses


class FakeSQLProductRepository(ProductRepository):
    def __init__(self, fake_db_session):
        self.session = fake_db_session

    def list_all(self) -> List[Product]:
        return [
            Product(
                product_id="1",
                user_id="1",
                name="Product 1",
                description="Description 1",
                price=10.0,
                location="Location 1",
                status=ProductStatuses.NEW,
                is_available=True
            ),
            Product(
                product_id="2",
                user_id="2",
                name="Product 2",
                description="Description 2",
                price=20.0,
                location="Location 2",
                status=ProductStatuses.NEW,
                is_available=True
            )
        ]

    def get_by_id(self, product_id: str) -> Product:
        return Product(
                product_id=product_id,
                user_id="user01",
                name="Product by id",
                description="Description product by id",
                price=20.0,
                location="Location ID",
                status=ProductStatuses.NEW,
                is_available=True
            )

    def create(self, product: Product) -> Product:
        return Product(
                product_id="p004",
                user_id="user01",
                name="Product by id",
                description="Description product by id",
                price=20.0,
                location="Location ID",
                status=ProductStatuses.NEW,
                is_available=True
            )

    def edit(self, product: Product) -> Product:
        return Product(
                product_id="p005",
                user_id="user01",
                name="Product by id",
                description="Description product by id",
                price=20.0,
                location="Location ID",
                status=ProductStatuses.NEW,
                is_available=True
            )

    def delete(self, product_id: str) -> Product:
        return Product(
                product_id="p005",
                user_id="user01",
                name="Product by id",
                description="Description product by id",
                price=20.0,
                location="Location ID",
                status=ProductStatuses.NEW,
                is_available=True
        )
    
    
# @pytest.fixture
# def fake_sql_product_repository(mocker):
#     mocker.patch.object(
#         FakeSQLProductRepository,
#         "list_all",
#         side_effect=FakeSQLProductRepository.list_all,
#     )
#     mocker.patch.object(
#         FakeSQLProductRepository,
#         "find_by_id",
#         side_effect=FakeSQLProductRepository.find_by_id,
#     )
#     mocker.patch.object(
#         FakeSQLProductRepository,
#         "create",
#         side_effect=FakeSQLProductRepository.create,
#     )
#     mocker.patch.object(
#         FakeSQLProductRepository,
#         "edit",
#         side_effect=FakeSQLProductRepository.edit,
#     )
#     mocker.patch.object(
#         FakeSQLProductRepository,
#         "delete",
#         side_effect=FakeSQLProductRepository.delete,
#     )
#     return FakeSQLProductRepository()


@pytest.fixture
def fake_sql_repository(fake_db_session):
    return FakeSQLProductRepository(fake_db_session)
