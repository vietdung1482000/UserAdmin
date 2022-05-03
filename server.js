const express = require('express')
const dotenv = require('dotenv')
const morgan = require('morgan')
const bodyparser = require('body-parser')
const path = require("path")


const connectDB = require('./server/database/connection')
connectDB();

const app = express()

dotenv.config({ path: 'config.env' })
const POST = process.env.POST || 8080

//log requests
app.use(morgan('tiny'));

//parser request to body-parser
app.use(bodyparser.urlencoded({ extended: true }))

//set view engine
app.set("view engine", "ejs")
app.set("views", path.resolve(__dirname, "view"))

//load assets
app.use('/css', express.static(path.resolve(__dirname, "assets/css")))
app.use('/js', express.static(path.resolve(__dirname, "assets/js")))


//load routers
app.use('/',require('./server/routes/router'))


app.listen(POST, () => console.log(`Example app listening on POST ${POST}!`))
