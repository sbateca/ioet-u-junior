import pytest
from pytest_mock import mocker


@pytest.fixture
def fake_product_repository(mocker):
    return mocker.MagicMock()
