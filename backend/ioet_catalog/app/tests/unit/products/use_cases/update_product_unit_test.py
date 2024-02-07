import pytest
from pytest_mock import mocker

from app.src.use_cases.product.update.use_case import UpdateProduct
from app.src.use_cases.product.update.request import UpdateProductRequestElement, ProductIdRequestElement, UpdateProductRequest
from app.src.use_cases.product.update.response import UpdateProductResponse
from api.src.dtos.product import UpdateProductRequestDto


@pytest.fixture
def product_repository_mock(mocker):
    return mocker.MagicMock()

class TestGetProductsCase:
    def test__returns_an_updated_product(self, fake_product_repository, fake_product):
        fake_product_repository.edit.return_value = fake_product

        fake_request: UpdateProductRequestDto = UpdateProductRequestDto(
            product_id=fake_product.product_id,
            user_id=fake_product.user_id,
            name=fake_product.name,
            description=fake_product.description,
            price=fake_product.price,
            location=fake_product.location,
            status=fake_product.status.value,
            is_available=fake_product.is_available
        )

        fake_product_request_element = UpdateProductRequestElement(
            product_id=fake_request.product_id, 
            user_id=fake_request.user_id, 
            name=fake_request.name, 
            description=fake_request.description, 
            price=fake_request.price, 
            location=fake_request.location, 
            status=fake_request.status, 
            is_available=fake_request.is_available
        )
        fake_product_id_request_element = ProductIdRequestElement(product_id=fake_product.product_id)

        response = UpdateProduct(fake_product_repository).__call__(
            UpdateProductRequest(
                fake_product_request_element,
                fake_product_id_request_element
            ))
        assert isinstance(response, UpdateProductResponse)
        assert response.product_id, fake_product.product_id
