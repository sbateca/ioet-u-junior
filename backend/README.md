# Backend Course

## Entity Relationship Diagram

After understanding the business rules, one of the next steps for the design of a backend application is the design of the data structure that will contain the persistent information of the system. In this case it has been decided to use a relational database. You can see the Entity Relationship Diagram below.

![ERD Diagram](./documentation/ERD.png)

You can also refer to the Hand-on Database ERD video, which explains the making of this diagram.

[Hand-on Database ERD](https://www.notion.so/ioet/Hands-on-Database-ERD-9118e93dffee48f69e987968f7fa350d)

## App structure

```Txt
📦backend
 ┣ 📂api
 ┃ ┣ 📂config
 ┃ ┣ 📂events
 ┃ ┣ 📂exception_handlers
 ┃ ┣ 📂routers
 ┃ ┃ ┣ 📂v1
 ┣ 📂app
 ┃ ┣ 📂src
 ┃ ┃ ┣ 📂exceptions
 ┃ ┃ ┣ 📂business
 ┃ ┃ ┣ 📂repository
 ┃ ┣ 📂repositories
 ┃ ┣ 📂use_cases
 ┃ ┃ ┣ 📂requests
 ┃ ┃ ┣ 📂responses
 ┃ ┣ 📂models
 ┃ ┣ 📂implementations
 ┃ ┃ ┣ 📂repositories
 ┃ ┃ ┃ ┣ 📂DAOs
 ┃ ┣ 📂tests
 ┣ 📂factories
 ┃ ┗ 📂config
 ┃ ┗ 📂respositories
 ┃ ┗ 📂use_cases
 ┣ 📂infrastructure
 ┃ ┗ 📂db
```
