import express from 'express';
import { getBooksHandler, getBookByIdHandler } from './controller/books.js';

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

export default router;
