import { getUsers, createUser, updateUser, deleteUser } from '../controllers/userController.js';
import express from 'express'
const router = express.Router()

// express router method to create route for getting all users
router.get('/', getUsers)
router.post('/', createUser)
router.post('/:id', updateUser)
router.delete('/delete/:id', deleteUser)

export default router
