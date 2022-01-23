import axios from 'axios'

const usersURL = 'http://localhost:5000/users/'

export const fetchUsers = () => axios.get(usersURL)
export const createUser = (postData) => axios.post(usersURL, postData)
export const updateUser = (id, postData) => axios.post(usersURL + id, postData)
export const deleteUser = (id) => axios.delete(usersURL+'delete/'+ id)

