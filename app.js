/** IMPORTS */
const express = require('express')
const path = require('path')
const methodOverride = require('method-override');

/** IMPORTS DE ROUTERS */
const indexRouter = require('./routes/index');
const userRouter = require('./routes/user');
const productsRouter = require('./routes/products');

/** CONFIG */
const app = express();
const publicPath = path.resolve(__dirname,"./public")
app.use(express.static(publicPath))
app.use(methodOverride('_method'))
app.use(express.json());

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs'); 

/** ROUTERS */
app.use(indexRouter);
app.use(userRouter);
app.use('/products',productsRouter);

app.listen(3000, () => {
    console.log("Server Running");
})