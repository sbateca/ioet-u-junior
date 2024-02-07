import pytest
from pytest_mock import mocker

from app.src.use_cases.product.delete import DeleteProduct, DeleteProductResponse, DeleteProductRequest


class TestDeleteProductCase:
    def test__returns_deleted_product(self, fake_product_repository, fake_product):
        fake_product_repository.delete.return_value = fake_product
        delete_product_request = DeleteProductRequest(product_id=fake_product.product_id)
        delete_product_reponse = DeleteProduct(fake_product_repository).__call__(delete_product_request)

        assert isinstance(delete_product_reponse, DeleteProductResponse)
        assert delete_product_reponse.product_id == fake_product.product_id
