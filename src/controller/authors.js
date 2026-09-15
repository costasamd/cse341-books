import { getAllAuthors } from '../models/authors.js';

const getAuthorsHandler = async (req, res) => {
    try{
        const authors = await getAllAuthors();
        return res.status(200).json({authors});
        
    }catch (error){
        console.error('GET /authors failed:', error);
        return res.status(500).json({message: 'internal server error'});

    }
};


import { getAuthorById, createAuthor, updateAuthor, deleteAuthor, authorHasBooks } from '../models/authors.js';

const getAuthorByIdHandler = async (req, res) => {
    try {
        const { id } = req.params;
        const author = await getAuthorById(id);

        if (!author) {
            return res.status(404).json({ message: 'author not found' });
        }

        return res.status(200).json(author);

    } catch (error) {
        console.error('GET /authors/:id failed:', error);
        return res.status(500).json({ message: 'internal server error' });
    }
};

const createAuthorHandler = async (req, res) => {
    try {
        const { id, name, birthYear } = req.body;

        if (!id || !name || birthYear === undefined) {
            return res.status(400).json({ message: 'id, name, and birthYear are required' });
        }

        const existingAuthor = await getAuthorById(id);
        if (existingAuthor) {
            return res.status(400).json({ message: 'author id already exists' });
        }

        const newAuthor = { id, name, birthYear };
        await createAuthor(newAuthor);

        return res.status(201).json(newAuthor);

    } catch (error) {
        console.error('POST /authors failed:', error);
        return res.status(500).json({ message: 'internal server error' });
    }
};

const updateAuthorHandler = async (req, res) => {
    try {
        const { id } = req.params;
        const { name, birthYear } = req.body;

        if (!name || birthYear === undefined) {
            return res.status(400).json({ message: 'name and birthYear are required' });
        }

        const existingAuthor = await getAuthorById(id);
        if (!existingAuthor) {
            return res.status(404).json({ message: 'author not found' });
        }

        await updateAuthor(id, { name, birthYear });
        const updatedAuthor = await getAuthorById(id);

        return res.status(200).json(updatedAuthor);

    } catch (error) {
        console.error('PUT /authors/:id failed:', error);
        return res.status(500).json({ message: 'internal server error' });
    }
};

const deleteAuthorHandler = async (req, res) => {
    try {
        const { id } = req.params;

        const existingAuthor = await getAuthorById(id);
        if (!existingAuthor) {
            return res.status(404).json({ message: 'author not found' });
        }

        const hasBooks = await authorHasBooks(id);
        if (hasBooks) {
            return res.status(409).json({ message: 'cannot delete author with existing books' });
        }

        await deleteAuthor(id);
        return res.status(204).send();

    } catch (error) {
        console.error('DELETE /authors/:id failed:', error);
        return res.status(500).json({ message: 'internal server error' });
    }
};


export {getAuthorsHandler, getAuthorByIdHandler, createAuthorHandler, updateAuthorHandler, deleteAuthorHandler};