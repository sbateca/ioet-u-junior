import pytest
from sqlalchemy.orm import Session

from adapters.src.repositories import SessionManager
from adapters.src.repositories.sql.connections.sql_connection import SQLConnection
import pytest_mock
from unittest.mock import MagicMock


@pytest.fixture
def fake_db_session():
    fake_session = MagicMock(spec=Session)
    return fake_session
