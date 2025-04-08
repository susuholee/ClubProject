require('dotenv').config();
require('./models/configs');
const express = require('express')
const path = require('path');
const cookieParser = require('cookie-parser');
const { mainRouter } = require('./routers');


const app = express();


app.set('view engine', 'ejs');
app.use(express.json());
app.use(express.urlencoded({extended : false}))
app.use('/public', express.static(path.join(__dirname, "public")))

app.use('/', mainRouter)

app.listen(3000, () => {
    console.log("서버 작동중...")
})