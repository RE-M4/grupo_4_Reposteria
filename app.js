/** IMPORTS */
const express = require('express'); //Se importa Express.
const path = require('path'); //Se importa Path para hacer uso de funciones que controlan rutas de archivos.
const methodOverride = require('method-override'); //Se importa Method Override para hacer uso de los métodos PUT y DELETE.
const session = require('express-session'); //Se importa Express Sesion para hacer uso de sesiones de usuario.
const cookieAuthMiddleware = require('./src/middlewares/cookieAuthMiddleware'); //Se hace uso del middleware para recordar un usuario a través de las cookies.

/** IMPORTS DE ROUTERS */
const indexRouter = require('./src/routes/index');
const userRouter = require('./src/routes/users');
const productsRouter = require('./src/routes/products');
const cookieParser = require('cookie-parser');

/** CONFIG */
const app = express();
const publicPath = path.resolve(__dirname,"./public"); //La variable contiene la ruta de archivos públicos.
app.use(express.urlencoded({ extended: false })); //Se declara a Express que capture los datos de un formulario y los trabaje como objetos literales.
app.use(express.static(publicPath)); //Se declara a Express la ruta de archivos públicos.
app.use(methodOverride('_method')); //Configuración de Method Override.
app.use(express.json()); //Se declara a Express que puede hacer uso de archivos JSON. 
app.use(session({secret:'secret', resave: false, saveUninitialized: true})); //Configuración de Express Session.
app.use(cookieParser()); //Se declara a express que use la funcionalidad de las cookies.

app.set('views', [path.join(__dirname, './src/views'),path.join(__dirname, './src/views/products'),path.join(__dirname, './src/views/users')]); //Se declara a EJS dónde debe buscar los archivos de vista.
app.set('view engine', 'ejs'); //Se declara a Express que use EJS como Template Engine.

app.use(cookieAuthMiddleware);

/** ROUTERS */
app.use(indexRouter);
app.use('/user',userRouter);
app.use('/products',productsRouter);

app.listen(3000, () => {
    console.log("Server Running");
})