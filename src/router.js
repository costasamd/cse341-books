import express from 'express';
import { getBooksHandler, getBookByIdHandler, createBookHandler,
    updateBookHandler,
    deleteBookHandler } from './controller/books.js';
import { getAuthorsHandler, getAuthorByIdHandler,
    createAuthorHandler,
    updateAuthorHandler,
    deleteAuthorHandler } from './controller/authors.js';


const router = express.Router();


/**
 * @openapi
 * /books:
 *   get:
 *     summary: Get a list of books
 *     tags:
 *      - Books
 *     responses:
 *       200:
 *         description: A list of books returned successfully
 *       500:
 *         description: Internal server error
 */
router.get('/books', getBooksHandler);

/**
 * @openapi
 * /books/{id}:
 *   get:
 *     summary: Get a single book by ID
 *     tags:
 *      - Books
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: The ID of the book to retrieve
 *     responses:
 *       200:
 *         description: The requested book
 *       404:
 *         description: Book not found
 *       500:
 *         description: Internal server error
 */
router.get('/books/:id', getBookByIdHandler);


/**
 * @openapi
 * /books:
 *   post:
 *     summary: Create a new book
 *     tags:
 *      - Books
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               id:
 *                 type: string
 *               authorId:
 *                 type: string
 *               title:
 *                 type: string
 *               publicationDate:
 *                 type: string
 *                 format: date
 *             example:
 *               id: b12
 *               authorId: a4
 *               title: Example Title
 *               publicationDate: "1985-06-01"
 *     responses:
 *       201:
 *         description: Book created successfully
 *       400:
 *         description: Missing required field or id already exists
 *       500:
 *         description: Internal server error
 */
router.post('/books', createBookHandler);

/**
 * @openapi
 * /books/{id}:
 *   put:
 *     summary: Update an existing book
 *     tags:
 *      - Books
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               authorId:
 *                 type: string
 *               title:
 *                 type: string
 *               publicationDate:
 *                 type: string
 *                 format: date
 *             example:
 *               authorId: a4
 *               title: Updated Title
 *               publicationDate: "1990-03-15"
 *     responses:
 *       200:
 *         description: Book updated successfully
 *       400:
 *         description: Missing required field
 *       404:
 *         description: Book not found
 *       500:
 *         description: Internal server error
 */
router.put('/books/:id', updateBookHandler);

/**
 * @openapi
 * /books/{id}:
 *   delete:
 *     summary: Delete a book
 *     tags:
 *      - Books
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       204:
 *         description: Book deleted successfully
 *       404:
 *         description: Book not found
 *       500:
 *         description: Internal server error
 */
router.delete('/books/:id', deleteBookHandler);

/**
 * @openapi
 * /authors:
 *   get:
 *     summary: Get all authors
 *     tags:
 *      - Authors
 *     responses:
 *       200:
 *         description: A list of authors returned successfully
 *       500:
 *         description: Internal server error
 */
router.get('/authors', getAuthorsHandler);

/**
 * @openapi
 * /authors/{id}:
 *   get:
 *     summary: Get an author by id
 *     tags:
 *      - Authors
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: The matching author returned successfully
 *       404:
 *         description: Author not found
 *       500:
 *         description: Internal server error
 */
router.get('/authors/:id', getAuthorByIdHandler);

/**
 * @openapi
 * /authors:
 *   post:
 *     summary: Create a new author
 *     tags:
 *      - Authors
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               id:
 *                 type: string
 *               name:
 *                 type: string
 *               birthYear:
 *                 type: integer
 *             example:
 *               id: a4
 *               name: Example Author
 *               birthYear: 1980
 *     responses:
 *       201:
 *         description: Author created successfully
 *       400:
 *         description: Missing required field or id already exists
 *       500:
 *         description: Internal server error
 */
router.post('/authors', createAuthorHandler);

/**
 * @openapi
 * /authors/{id}:
 *   put:
 *     summary: Update an existing author
 *     tags:
 *      - Authors
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *               birthYear:
 *                 type: integer
 *             example:
 *               name: Updated Author
 *               birthYear: 1981
 *     responses:
 *       200:
 *         description: Author updated successfully
 *       400:
 *         description: Missing required field
 *       404:
 *         description: Author not found
 *       500:
 *         description: Internal server error
 */
router.put('/authors/:id', updateAuthorHandler);

/**
 * @openapi
 * /authors/{id}:
 *   delete:
 *     summary: Delete an author
 *     tags:
 *      - Authors
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       204:
 *         description: Author deleted successfully
 *       404:
 *         description: Author not found
 *       409:
 *         description: Author still has books and cannot be deleted
 *       500:
 *         description: Internal server error
 */
router.delete('/authors/:id', deleteAuthorHandler);


export default router;
