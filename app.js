/** IMPORTS */
const express = require('express')
const path = require('path')
const methodOverride = require('method-override');
const session = require('express-session')

/** IMPORTS DE ROUTERS */
const indexRouter = require('./src/routes/index');
const userRouter = require('./src/routes/users');
const productsRouter = require('./src/routes/products');

/** CONFIG */
const app = express();
const publicPath = path.resolve(__dirname,"./public")
app.use(express.static(publicPath))
app.use(methodOverride('_method'))
app.use(express.json());
app.use(session({secret:'secret'}))

app.set('views', [path.join(__dirname, './src/views'),path.join(__dirname, './src/views/products'),path.join(__dirname, './src/views/users')]);
app.set('view engine', 'ejs'); 

/** ROUTERS */
app.use(indexRouter);
app.use('/user',userRouter);
app.use('/products',productsRouter);

app.listen(3000, () => {
    console.log("Server Running");
})