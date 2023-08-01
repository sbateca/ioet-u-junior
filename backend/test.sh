#!/usr/bin/env sh

# Check if sqlite3 is installed
which sqlite3 >/dev/null || {
  echo 'sqlite3 command not found.' >&2
  exit 1
}

# Print the current version of sqlite3
echo 'SQLite3 version:' "$(sqlite3 --version)"