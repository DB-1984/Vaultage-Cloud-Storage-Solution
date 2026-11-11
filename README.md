# Vaultage — File Storage API

**A backend-focused file storage application built with Node.js, Express, PostgreSQL and Prisma, exploring authentication, file uploads and access-controlled storage.**

Vaultage is a self-directed development project exploring the backend architecture required for a Drive-style file storage service.

The application provides the foundations for uploading and managing files, organising their associated records and controlling access to stored content.

Rather than attempting to reproduce a complete cloud storage platform, Vaultage concentrates on the API, database relationships, file handling and authentication needed to support one.

**[Try the Live App](https://vaultage.davidbrandondev.com/)**

*Supabase provides the database and file storage. The database may be paused after inactivity, temporarily preventing access.*

---

## Video Demonstration

[![Watch the Vaultage demonstration](https://img.youtube.com/vi/FJbYa4EyLdw/hqdefault.jpg)](https://www.youtube.com/watch?v=FJbYa4EyLdw)

*Click the image to watch Vaultage in action on YouTube.*

---

## Technology Stack

- **Node.js** — Backend JavaScript runtime
- **Express** — HTTP API and application routing
- **PostgreSQL** — Relational database
- **Supabase** — Hosted PostgreSQL and file storage
- **Prisma ORM** — Database models, relationships and queries
- **Multer** — Handling incoming multipart file uploads
- **Zod** — Request data validation
- **JWT** — Token-based authentication
- **bcrypt / bcryptjs** — Password hashing and verification

---

## Key Features

### File Uploads and Storage

Vaultage provides backend functionality for handling uploaded files.

- File uploads processed through Multer
- File content stored using Supabase Storage
- Associated metadata maintained in PostgreSQL
- Database operations managed through Prisma

Separating file content from its database records allows the application to manage structured information about files independently of their underlying storage.

### File Organisation

The application explores the data structures required to organise and manage a collection of stored files.

PostgreSQL provides relational persistence for file records and associated metadata, while Prisma provides the application-level interface for working with those relationships.

### Authentication

Vaultage uses JWT-based authentication with password hashing.

- Account authentication
- Password hashing and verification
- JWT-based authenticated requests
- Access-controlled API operations

This provides experience implementing authentication within a standalone Express backend.

### File Access and Sharing

Access checks determine which stored resources a user is permitted to interact with.

The project explores permissions associated with:

- Reading files
- Modifying stored resources
- Sharing access with other users

These checks form part of the backend's responsibility rather than relying solely on the client interface.

### Request Validation

Zod is used to validate incoming request data before it is processed.

This helps establish clear expectations for the data received by API endpoints and separates validation from the underlying database operations.

---

## Technical Approach

### REST API Architecture

Vaultage uses Node.js and Express to provide the application's backend functionality.

Express handles HTTP requests and routing, while the application coordinates authentication, validation, database operations and file storage.

The project focuses on building a backend service that could support different frontend interfaces without tying its core functionality to a particular UI framework.

### Relational Data Modelling

PostgreSQL stores the structured application data, with Prisma providing the ORM.

This provides practical experience defining and working with relationships between users, stored files and their associated metadata.

Using a relational database also makes Vaultage a useful contrast to my MongoDB-based applications, Sesh and LinkStore.

### Database and Object Storage

Vaultage uses two different Supabase services:

**PostgreSQL**
Stores structured records and relationships, managed through Prisma.

**Supabase Storage**
Stores the uploaded file content.

Keeping these responsibilities separate allows the application to manage metadata and file content through their respective services.

### Authentication and Authorisation

JWTs are used to authenticate requests, while access-control checks determine which operations a user may perform on particular resources.

The distinction is important: authentication establishes a user's identity, while authorisation determines what that user is permitted to access.

### File Upload Processing

Multer handles incoming file uploads before the application processes them for storage.

The project provides experience working with multipart form submissions and integrating uploaded content with database-backed records.

### Input Validation

Zod validates incoming request data, helping prevent incorrectly structured values from reaching the application's business logic and database operations.

---

## Application Flow

A typical file upload involves:

1. A user authenticates with the application.
2. The client submits a file upload request.
3. Express receives the request and Multer processes the incoming file.
4. The application validates the relevant request data.
5. The file content is uploaded to Supabase Storage.
6. Associated file information is recorded in PostgreSQL through Prisma.
7. The API returns a response to the client.

The application also provides functionality for retrieving, managing and controlling access to stored resources.

---

## Local Development

### Requirements

- Node.js and npm
- A Supabase project
- PostgreSQL connection details
- Supabase Storage configuration
- Authentication secrets
- Required environment variables

### Installation

Clone the repository and navigate into the project directory.

Install dependencies:

```bash
npm install
```

Configure the required environment variables for PostgreSQL, Supabase Storage and JWT authentication.

Generate the Prisma client if required by the project setup:

```bash
npx prisma generate
```

Apply the database migrations using the migration procedure configured for the project.

Start the application using the development script defined in `package.json`.

**Note:** The precise environment-variable names, database migration commands and server start script should be taken from the repository's configuration.

---

## Project Context

Vaultage is a self-directed backend development project exploring how a file storage service can be built using Node.js, Express and relational data persistence.

The project was developed to gain experience with authentication, REST API design, file uploads, database relationships and access-controlled resources.

Its longer-term concept is a storage backend that could be adapted or branded for a particular team, organisation or product.

Alongside my frontend and full-stack applications, Vaultage demonstrates an interest in the systems and data structures that support user-facing software.

---

## Links

- **Live Application:** https://vaultage.davidbrandondev.com/
- **Video Demonstration:** https://www.youtube.com/watch?v=FJbYa4EyLdw
- **Developer Portfolio:** https://davidbrandondev.com/
- **GitHub Profile:** https://github.com/DB-1984
