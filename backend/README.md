
## app structures

```
my_project/
├── app/ ---> This folder contains the application logic and is divided into subfolders based on responsibilities.
│   │
│   ├── interfaces/ ---> Defines the interfaces that connect the application layer with external layers.
│   │   ├── controllers/ ---> Contains controllers that handle application requests and responses.
│   │   ├── presenters/ ---> Transforms data from the application layer into a suitable format for the presentation layer.
│   │   └── gateways/ ---> Defines interfaces to interact with the infrastructure layer from the application layer.
│   │   
│   │
│   ├── usecases/ ---> Contains the use cases or main functionalities of the application.
│   │   ├── interactors/ ---> Implements the business logic of the use cases.
│   │   ├── repositories/ ---> Defines interfaces to interact with data repositories from the application layer.
│   │   └── dtos/ ---> Contains data transfer objects used to exchange information between layers.
│   │
│   ├── entities/ ---> Contains the domain entities of the application.
│   └── tests/ ---> Contains files and logic related to application testing.
│
├── infrastructure/ ---> This folder is responsible for technical infrastructure and implementation details.
│   │
│   ├── repositories/ --> Implements the repositories defined in the application layer.
│   ├── services/ ---> Implements external services or integrations with external APIs.
│   ├── logging/ ---> Contains files and logic related to application event logging.
│   ├── external_interfaces/ ---> Contains files and logic related to external interfaces of the application.
│   ├── databases/ ---> Contains migration scripts, configurations, and files related to data persistence.
│       ├── orm/ --> Contains files and configurations related to object-relational mapping (ORM).
│       └── migrations/ --> Contains files and scripts for database migrations.
│   
├── interfaces/ ----> Defines the user interfaces of the application.
│  │   
│  ├── api/ --> Represents the application programming interface (API) of the application.
│      ├── controllers/ ---> Contains controllers specific to the API.
│      ├── schemas/ ---> Defines data schemas used in the API.
│      ├── security/ ---> Contains files and logic related to API security.
│      │   ├── jwt/ --> Contains files and logic related to JSON Web Tokens (JWT).
│      │   ├── oauth/ --> same
│      │   ├── api_key/ --> same
│      │   └── ssl/ ----> Contains files and logic related to API keys.
│      │
│      ├── docs/ --> Contains documentation related to the API.
│      │   └── swagger/
│      ├── monitoring/  ---> Contains files and logic related to API monitoring and event logging.
│      │   └── logging/
│      └── error_handling/ --> Contains files and logic related to error handling in the API.  
│
└── main.py
```
