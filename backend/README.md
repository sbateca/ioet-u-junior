
## app structures

```
my_project/
├── app/ ---> Esta carpeta contiene la lógica de la aplicación y se divide en subcarpetas según las responsabilidades.
│   │   
│   ├── interfaces/ ---> Define las interfaces que conectan la capa de aplicación con las capas externas.
│   │   ├── controllers/ ---> Contiene controladores que manejan las solicitudes y respuestas de la aplicación.
│   │   ├── presenters/ ---> Transforma los datos de la capa de aplicación en un formato adecuado para la capa de presentación.
│   │   ├── gateways/ ---> Define interfaces para interactuar con la capa de infraestructura desde la capa de aplicación.
│   │   └── tests/ ---> Contiene archivos y lógica relacionados con las pruebas de la aplicación.
│   │
│   ├── usecases/ ---> Contiene los casos de uso o funcionalidades principales de la aplicación.
│   │   ├── interactors/ ---> Implementa la lógica de negocio de los casos de uso.
│   │   ├── repositories/ ---> Define interfaces para interactuar con los repositorios de datos desde la capa de aplicación.
│   │   └── dtos/ --->  Contiene objetos de transferencia de datos utilizados para intercambiar información entre las capas.
│   │
│   ├── entities/ ---> Contiene las entidades del dominio de la aplicación.
│
├── infrastructure/ ---> Esta carpeta se encarga de la infraestructura técnica y los detalles de implementación.
│   │
│   ├── repositories/ --> Implementa los repositorios definidos en la capa de aplicación.
│   ├── services/ ---> Implementa servicios externos o integraciones con APIs externas.
│   ├── logging/ ---> Contiene archivos y lógica relacionados con el registro de eventos de la aplicación.
│   ├── external_interfaces/ ---> Contiene archivos y lógica relacionados con las interfaces externas de la aplicación.
│   ├── databases/ ---> Contiene scripts de migraciones, configuraciones y archivos relacionados con la persistencia de datos.
│       ├── orm/ --> Contiene archivos y configuraciones relacionados con el mapeo objeto-relacional (ORM).
│       └── migrations/ --> Contiene archivos y scripts para las migraciones de la base de datos.
│   
├── interfaces/ ----> Define las interfaces de usuario de la aplicación.
│  │   
│  ├── api/ --> Representa la interfaz de programación de aplicaciones (API) de la aplicación.  
│      ├── controllers/ ---> Contiene controladores específicos para la API.
│      ├── schemas/ ---> Define los esquemas de datos utilizados en la API.
│      ├── security/ ---> Contiene archivos y lógica relacionados con la seguridad de la API.
│      │   ├── jwt/ --> Contiene archivos y lógica relacionados con JSON Web Tokens (JWT).
│      │   ├── oauth/ --> idem
│      │   ├── api_key/ --> idem
│      │   └── ssl/ ----> Contiene archivos y lógica relacionados con claves de API.
│      │
│      ├── docs/ --> Contiene documentación relacionada con la API.
│      │   └── swagger/
│      ├── monitoring/  ---> Contiene archivos y lógica relacionados con la supervisión y el registro de eventos de la API.
│      │   └── logging/
│      └── error_handling/ --> Contiene archivos y lógica relacionados con el manejo de errores en la API.  
│
└── main.py