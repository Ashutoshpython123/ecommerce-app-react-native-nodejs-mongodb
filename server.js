require("dotenv").config();
const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const fileUpload = require('express-fileupload')
const cookieParser = require('cookie-parser')
const path = require('path')
//const bodyParser = require("body-parser");



//App config
const app = express();
app.use(express.json());
app.use(cors());
app.use(cookieParser());
//app.use(bodyParser.json());
app.use(fileUpload({
    useTempFiles: true
}))

//routes
app.use('/user', require('./routes/userRoutes'));
app.use('/product', require('./routes/categoryRoutes'));
app.use('/file', require('./routes/upload_image'))
app.use('/productapi', require('./routes/productRoutes'))

//db config
const connection_url = 'mongodb+srv://ecommerce:fewAreCx3tYUxGJI@cluster0.cigou.mongodb.net/ecommercedb?retryWrites=true&w=majority'
mongoose.connect(connection_url, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
})






//listener
const port = process.env.PORT || 8001
app.listen(port, ()=>{
    console.log(`listening port localhost : ${port}`);
})