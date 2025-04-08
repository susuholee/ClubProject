const express = require('express')
const path = require('path');
const app = express();
const categoryRouter = require('./routers/categoryRouter');


app.set('view engine', 'ejs');

app.use(express.urlencoded({extended : false}))
app.use('/public', express.static(path.join(__dirname, "public")))

app.use('/categories', categoryRouter);

app.get('/' , (req, res) => {
    res.render('main/main')
})


app.listen(3000,() => {
    console.log("서버 작동중...")
})