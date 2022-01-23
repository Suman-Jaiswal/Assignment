const mongoose = require('mongoose')

const connectDB = async (DB_URI) => {
   mongoose.connect(DB_URI, {
  useNewUrlParser: true,
  // useCreateIndex: true,
  useUnifiedTopology: true
})
.then(res => console.log('mongoDB connected...'))
.catch(err => console.log(err))
}

export default connectDB
