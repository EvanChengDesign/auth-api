# Authentication API Server Project
Authentication Server Phase 3: Role Based Access Control

Author: Evan Cheng  

Version: 1.0.0

## Project Overview:

This project aims to enhance the access control capabilities of our system by implementing Role Based Access Control (RBAC) using an Access Control List (ACL). While login functionality is crucial, granular access control is essential for scalability. In this lab, the focus is on integrating an authentication server and an API server to create a unified, authenticated API server.

The primary objective is to extend the restrictive capabilities of routes within the API, ensuring that only authorized users with specific permissions can perform certain actions. Regular users are restricted to reading data, while writers can read and create content. Editors have additional permissions to update data, and administrators possess the highest level of access with the ability to read, create, update, and delete content.

To achieve this, routes within the API that perform these actions will be protected by both valid user authentication and authorization based on the user's assigned permissions. This integration will leverage the latest coding techniques to create a fully functional, authenticated, and authorized API server, thereby enhancing the security and control of our system.

## Design Philosophy:

The design philosophy for implementing Role Based Access Control (RBAC) using an Access Control List (ACL) in this project revolves around modularity, scalability, and security.

Modularity: The system should be designed in a modular fashion, allowing for easy integration and maintenance of different components such as the authentication server, API server, and access control mechanisms. Modular design enables flexibility in extending or modifying functionality without affecting other parts of the system.

Scalability: The RBAC system should be scalable to accommodate the growth of users, roles, and permissions. Scalability ensures that the system can handle increased load and complexity without sacrificing performance or security. This involves designing efficient data structures and algorithms for managing access control lists and user-role mappings.

Security: Security is paramount in access control systems. The design should prioritize robust authentication mechanisms to verify the identity of users and prevent unauthorized access. Authorization mechanisms should enforce the principle of least privilege, granting users only the permissions necessary to perform their tasks. Additionally, the system should incorporate measures such as encryption, input validation, and logging to protect against security threats like injection attacks and data breaches.

Flexibility: The design should allow for flexibility in defining roles and permissions to accommodate diverse user requirements. This includes the ability to easily add, remove, or modify roles and permissions without disrupting the overall system functionality. Flexibility also extends to supporting different authentication methods and integration with third-party identity providers if needed.

Auditability: The system should provide comprehensive logging and auditing capabilities to track access control decisions and user actions. Audit logs enable administrators to monitor system activity, detect security incidents, and troubleshoot access-related issues effectively.

## Server Initialization:

The server is initialized in src/server.js, which sets up middleware, routes, and starts the Express application.

## Middleware Modules:

Middleware modules are utilized to handle JSON payloads, logging, and Sequelize session transactions. They are initialized in `src/server.js` and configured to ensure smooth operation between requests and database interactions.

## Error Handling Modules:

## UML:
![image](./images/bearerAuthUML.png)

## Deployment:

The server is deployed to the cloud. The live API can be accessed at:

[Render URL](postgres://evancheng:oW0au80BHy8ZUsos3GrBQahMJdP4fdfB@dpg-copasr4f7o1s73c8ukk0-a.oregon-postgres.render.com/api_server_db_ek8r)

(postgres://evancheng:oW0au80BHy8ZUsos3GrBQahMJdP4fdfB@dpg-copasr4f7o1s73c8ukk0-a.oregon-postgres.render.com/api_server_db_ek8r)
