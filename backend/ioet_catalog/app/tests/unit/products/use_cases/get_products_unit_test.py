import pytest
from app.src.use_cases.product.list_all.use_case import ListProducts
from app.src.use_cases.product.list_all.response import ListProductResponse
from pytest_mock import mocker


@pytest.fixture
def product_repository_mock(mocker):
    return mocker.MagicMock()

class TestGetProductsCase:
    def test__returns_a_list_of_products(self, fake_product_repository, fake_product_list):
        fake_product_repository.list_all.return_value = fake_product_list
        expected_products = 2
        products_response = ListProducts(fake_product_repository).__call__()

        assert isinstance(products_response, ListProductResponse)
        assert len(products_response.products) == expected_products
