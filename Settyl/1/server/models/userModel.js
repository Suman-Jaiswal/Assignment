import mongoose from 'mongoose'

const userSchema = mongoose.Schema({
    firstName: {
        type: String,
    },
    secondName:{
        type: String,
    },
    email: {
        type: String,
    }
}, {
    timestamps: true
})

const User = mongoose.model('User', userSchema)

export default User
