import User from '../models/userModel.js'
import asyncHandler from 'express-async-handler'

//getUsers function to get all users
export const getUsers = asyncHandler(async (req, res) => {
    const users = await User.find({})
    res.json(users)
})
export const createUser = asyncHandler(async (req, res) => {
    const raw = req.body
    const user = await new User(raw)
    if(user) {
        user.save()
        res.json(user)
    }
    else throw Error('There is an error while creating user!')
})
export const updateUser = asyncHandler(async (req, res) => {
    const raw = req.body
    const {id} = req.params
    User.findByIdAndUpdate(id, raw, {new: true}, function(err, doc){
        if(err) res.json('Error while updating user data')
        else res.status(200).json(doc)
    })
    
})
export const deleteUser = asyncHandler(async (req, res) => {
    const {id} = req.params
    User.findByIdAndDelete(id, function(err, doc){
        if(err) throw Error('Error while deleting user data')
        else res.status(200).json('deleted')
    })
    
})
