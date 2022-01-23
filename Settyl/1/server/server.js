import connectDB from './config/db.js'
import userRoutes from './routes/userRoute.js'
import express from 'express'
import dotenv  from 'dotenv'
import cors from 'cors'

//dotenv config
dotenv.config()

//connect database
const DB_URI = process.env.MONGO_URI
connectDB(DB_URI)

const app = express()

//cors
app.use(cors())

//parser
app.use(express.json())

//Creating API for user
app.use('/users', userRoutes)

const PORT = process.env.PORT || 5000

//Express js listen method to run project on http://localhost:5000
app.listen(PORT, console.log('App is running in ' + process.env.NODE_ENV + ' mode on port ' + PORT))
