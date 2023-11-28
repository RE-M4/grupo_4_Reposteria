const multer = require('multer');
const path = require("path");

let storage = multer.diskStorage({
        destination: function (req, file, cb) {
          cb(null, './public/images/users')
        },
        filename: function (req, file, cb) {
            let fileName = Date.now() + '-' + file.originalname.replace(/ /gi, '-').toLowerCase();
          cb(null, fileName)
        }
      })
       
const upload = multer({ storage: storage })

module.exports = upload;