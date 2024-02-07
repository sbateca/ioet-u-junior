import pytest
from fastapi.testclient import TestClient

from api.src.create_app import create_app

from adapters.test.fixtures.sql_repository_fixture import fake_sql_repository
from adapters.test.fixtures.sql_session_manager_fixture import fake_db_session
from api.tests.fixtures.product_fixture import fake_product, fake_product_list
from app.tests.fixtures.product_repository_fixture import fake_product_repository


@pytest.fixture
def api_client() -> TestClient:
    api = create_app()
    client = TestClient(api)

    return client
