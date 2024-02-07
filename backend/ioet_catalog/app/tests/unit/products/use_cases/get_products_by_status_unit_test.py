from app.src.use_cases.product.get_by_status import (
    FindProductByStatus,
    FindProductByStatusResponse,
    FindProductByStatusRequest
)


class TestGetProductsByStatusCase:
    def test__returns_a_list_of_products_by_status(self, fake_product_repository, fake_new_product_list):
        fake_product_repository.get_by_status.return_value = fake_new_product_list
        request = FindProductByStatusRequest("New")
        expected_products = 2
        products_response = FindProductByStatus(fake_product_repository).__call__(request)

        assert isinstance(products_response, FindProductByStatusResponse)
        assert len(products_response.products) == expected_products

    def test__returns_an_empty_list_with_not_valid_status(self, fake_product_repository, fake_empty_product_list):
        fake_product_repository.get_by_status.return_value = fake_empty_product_list
        request = FindProductByStatusRequest("wrong-status")
        expected_products = 0
        products_response = FindProductByStatus(fake_product_repository).__call__(request)

        assert isinstance(products_response, FindProductByStatusResponse)
        assert len(products_response.products) == expected_products
