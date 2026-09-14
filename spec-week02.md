# Books API Week 02 Spec - Version 1

## Feature 1: Book CRUD Operations and Author References

### Goal
Update the existing Week 01 book API so book documents include a reference to an author and the API supports all CRUD operations for books. Every book route must be documented and testable in Swagger.

### Data Model
Book documents will be stored in the `books` collection.

Required book fields:
- `id`: string, required, custom id such as `b1`
- `authorId`: string, required, references the `id` field of an author document
- `title`: string, required
- `publicationDate`: string, required

Books will continue to use custom string ids instead of MongoDB `_id` values for route parameters.

### Relationship to Authors
Each book will identify its author with an `authorId` field. The value of `authorId` must match the custom `id` value of an existing author document.

When creating or updating a book, the API should reject the request with a `400` status code if the submitted `authorId` does not match an existing author.

### Routes

#### GET /books
Purpose: Return all books.

Success:
- Status code: `200`
- Response body: an array of book objects

Errors:
- `500` if an unexpected server or database error occurs

#### GET /books/:id
Purpose: Return one book by its custom id.

Success:
- Status code: `200`
- Response body: the matching book object

Errors:
- `404` if no book exists with that id
- `500` if an unexpected server or database error occurs

#### POST /books
Purpose: Create a new book.

Request body:

    {
      "id": "b4",
      "authorId": "a1",
      "title": "Example Book Title",
      "publicationDate": "2026-01-15"
    }

Success:
- Status code: `201`
- Response body: the newly created book object

Errors:
- `400` if a required field is missing
- `400` if the `id` already exists
- `400` if the `authorId` does not match an existing author
- `500` if an unexpected server or database error occurs

#### PUT /books/:id
Purpose: Update an existing book.

Request body:

    {
      "authorId": "a2",
      "title": "Updated Book Title",
      "publicationDate": "2026-02-20"
    }

Success:
- Status code: `200`
- Response body: the updated book object

Errors:
- `400` if a required field is missing
- `400` if the `authorId` does not match an existing author
- `404` if no book exists with that id
- `500` if an unexpected server or database error occurs

#### DELETE /books/:id
Purpose: Delete an existing book.

Success:
- Status code: `204`
- Response body: none

Errors:
- `404` if no book exists with that id
- `500` if an unexpected server or database error occurs

### Swagger Documentation
Swagger must document every book route.

### Deployment Expectations
After implementation, the book routes must work locally and from the deployed Render application. The deployed Swagger page at `/api-docs` must allow someone to test every book route from the browser.

## Feature 2: Author CRUD Operations

## Goal
Biuld a author collection that will be referenced in the books collection. The API supports all CRUD operation.

## Data Model
Author documents will be stored in `authors` collection.

required author fields:
- `id`: string, required, custom id such as `a1`
- `name` : string, required
- `birthYear`: string in ISO 8601 date format, required

### EndPoints

#### GET/author
purpose: Return all authors

Success:
- Status code: `200`
- Response body: an array of autho objects

Errors:
- Status code: `500`
- Response body: safe message "Internal Error"

#### GET/author/:id
purpose: Return one author by its custom id

success:
- Status code: `200`
- Response body: the matching author object

Errors:

- Status code: `404` if author don't exist
- Status code: `500` if an unexpected error or database error ocurrs

#### POST/author
purpose: Create a new author

request body:

    {
        "id": "a1",
        "name": "Robert Jordan",
        "birthYear": "1948"
    }

Success:
- Status code: `201`
- Response body: the newly created author object

Errors:
- `400` if a requiered field is missing
- `400` if the `id` already exists
- `400` if the `authorId` does not match and existing author
- `500` if an unexpected server or database error occurs

#### PUT /author/:id
purpose: Update an existing author

request body:

    {
        "id": "a1",
        "name": "update name",
        "birthYear": "update birth year"

    }

Success:
- Status code: `200`
- Response body: the update object

Errors:
- `400` if a requiered field is missing
- `400` if the `id` already exists
- `404` if the `author` does not exist
- `500` if an unexpected server or database error occurs

#### DELETE /author/:id
Purpose: Delete an existing author

success:
- Status code: `204`
- Response body: none

Errors:
- `404` if no author exist with the specific id
- `500` id an unexpected server or database error occurs

### Swagger Documentation
Swagger must document every author route

### Deployment Expectations
After implementation, the author routes must work locally and from the deployed Render application. The deployed swagger page at `/api-docs` must allow someone to test every author route from the browser.


// ---------------------------------------------------------------------------------------------------------------------------- //

# Books API Week 02 Spec - Version 2

## Error Response Format
Unless otherwise noted, every error response returns a JSON body in the form:

    { "error": "description of what went wrong" }

This applies to all routes in both Feature 1 (Books) and Feature 2 (Authors).

---

## Feature 1: Book CRUD Operations and Author References

### Goal
Update the existing Week 01 book API so book documents include a reference to an author and the API supports all CRUD operations for books. Every book route must be documented and testable in Swagger.

### Data Model
Book documents will be stored in the `books` collection.

Required book fields:
- `id`: string, required, custom id such as `b1`
- `authorId`: string, required, references the `id` field of an author document
- `title`: string, required
- `publicationDate`: string, required

Books will continue to use custom string ids instead of MongoDB `_id` values for route parameters.

### Relationship to Authors
Each book will identify its author with an `authorId` field. The value of `authorId` must match the custom `id` value of an existing author document.

When creating or updating a book, the API should reject the request with a `400` status code if the submitted `authorId` does not match an existing author.

### Routes

#### GET /books
Purpose: Return all books.

Success:
- Status code: `200`
- Response body: an array of book objects

Errors:
- `500` if an unexpected server or database error occurs

#### GET /books/:id
Purpose: Return one book by its custom id.

Success:
- Status code: `200`
- Response body: the matching book object

Errors:
- `404` if no book exists with that id
- `500` if an unexpected server or database error occurs

#### POST /books
Purpose: Create a new book.

Request body:

    {
      "id": "b4",
      "authorId": "a1",
      "title": "Example Book Title",
      "publicationDate": "2026-01-15"
    }

Success:
- Status code: `201`
- Response body: the newly created book object

Errors:
- `400` if a required field is missing
- `400` if the `id` already exists
- `400` if the `authorId` does not match an existing author
- `500` if an unexpected server or database error occurs

#### PUT /books/:id
Purpose: Update an existing book. The `id` is taken from the URL param; it is not part of the request body.

Request body:

    {
      "authorId": "a2",
      "title": "Updated Book Title",
      "publicationDate": "2026-02-20"
    }

Success:
- Status code: `200`
- Response body: the updated book object

Errors:
- `400` if a required field is missing
- `400` if the `authorId` does not match an existing author
- `404` if no book exists with that id
- `500` if an unexpected server or database error occurs

#### DELETE /books/:id
Purpose: Delete an existing book.

Success:
- Status code: `204`
- Response body: none

Errors:
- `404` if no book exists with that id
- `500` if an unexpected server or database error occurs

### Swagger Documentation
Swagger must document every book route.

### Deployment Expectations
After implementation, the book routes must work locally and from the deployed Render application. The deployed Swagger page at `/api-docs` must allow someone to test every book route from the browser.

---

## Feature 2: Author CRUD Operations

### Goal
Build an author collection that will be referenced by the books collection. The API supports all CRUD operations for authors.

### Data Model
Author documents will be stored in the `authors` collection.

Required author fields:
- `id`: string, required, custom id such as `a1`
- `name`: string, required
- `birthYear`: string, required. ISO 8601 reduced-precision date format, year only (`YYYY`), e.g. `"1948"`.

### Relationship to Books
An author cannot be deleted while one or more books still reference their `id` via `authorId`. See `DELETE /authors/:id` below.

### Routes

#### GET /authors
Purpose: Return all authors.

Success:
- Status code: `200`
- Response body: an array of author objects

Errors:
- `500` if an unexpected server or database error occurs

#### GET /authors/:id
Purpose: Return one author by its custom id.

Success:
- Status code: `200`
- Response body: the matching author object

Errors:
- `404` if no author exists with that id
- `500` if an unexpected server or database error occurs

#### POST /authors
Purpose: Create a new author.

Request body:

    {
      "id": "a1",
      "name": "Robert Jordan",
      "birthYear": "1948"
    }

Success:
- Status code: `201`
- Response body: the newly created author object

Errors:
- `400` if a required field is missing
- `400` if the `id` already exists
- `500` if an unexpected server or database error occurs

#### PUT /authors/:id
Purpose: Update an existing author. The `id` is taken from the URL param; it is not part of the request body.

Request body:

    {
      "name": "Updated Name",
      "birthYear": "1950"
    }

Success:
- Status code: `200`
- Response body: the updated author object

Errors:
- `400` if a required field is missing
- `404` if no author exists with that id
- `500` if an unexpected server or database error occurs

#### DELETE /authors/:id
Purpose: Delete an existing author. Blocked if the author still has books referencing them, to prevent books being left with a dangling `authorId` (consistent with the rule that book creation/update rejects an unknown `authorId`).

Success:
- Status code: `204`
- Response body: none

Errors:
- `404` if no author exists with that id
- `409` if one or more books still reference this author's `id` via `authorId` (books must be deleted or reassigned to a different author first)
- `500` if an unexpected server or database error occurs

### Swagger Documentation
Swagger must document every author route.

### Deployment Expectations
After implementation, the author routes must work locally and from the deployed Render application. The deployed Swagger page at `/api-docs` must allow someone to test every author route from the browser.
