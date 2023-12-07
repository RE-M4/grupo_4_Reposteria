/** CONFIG */
const multer = require('multer'); //Se importa Multer para la subida y manejo de archivos en formularios.
const path = require('path'); //Se importa Path para hacer uso de funciones que controlan rutas de archivos. 

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, path.resolve(__dirname, '../../public/images/users'))
    },
    filename: function (req, file, cb) {
      const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9)
      cb(null, file.fieldname + '-' + uniqueSuffix + path.extname(file.originalname))
    }
})

module.exports = storage;