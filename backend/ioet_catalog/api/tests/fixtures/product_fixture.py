import pytest
from faker import Faker
from decimal import Decimal

from app.src.core.models._product import Product, ProductStatuses

fake = Faker()

@pytest.fixture
def fake_product():
    return Product(
        product_id=fake.uuid4(),
        user_id=fake.uuid4(),
        name=fake.word(),
        description=fake.sentence(),
        price=Decimal(fake.pyint(min_value=0, max_value= 9999, step=1)),
        location=fake.address(),
        status=fake.random_element(elements=(ProductStatuses.NEW, ProductStatuses.USED)),
        is_available=fake.boolean()
    )

@pytest.fixture
def fake_product_list():
    return [Product(
        product_id=fake.uuid4(),
        user_id=fake.uuid4(),
        name=fake.word(),
        description=fake.sentence(),
        price=Decimal(fake.pyint(min_value=0, max_value= 9999, step=1)),
        location=fake.address(),
        status=fake.random_element(elements=(ProductStatuses.NEW, ProductStatuses.USED)),
        is_available=fake.boolean()
    ) for _ in range(2)]

@pytest.fixture
def fake_empty_product_list():
    return []
