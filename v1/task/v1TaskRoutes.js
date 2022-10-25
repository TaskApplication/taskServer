const { Router } = require('express');
const createTask = require('./create');
const getByIdTask = require('./getById');
const updateByIdTask = require('./updateById');
const deleteByIdTask = require('./deleteById');
const search = require('./search');

const router = Router();

// CRUD routes

router.post('/', createTask) // Create
router.get('/:id', getByIdTask) // Read
router.post('/search', search); // Read
router.patch('/:id', updateByIdTask) // Update
router.delete('/:id', deleteByIdTask) // Delete

module.exports = router;
