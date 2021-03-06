import multer from "multer"
const storage = multer.diskStorage({
    destination: function(req, file, cb) {
      cb(null,'uploads');
      // console.log(cb);
    },
    filename: function(req, file, cb) {
      
      cb(null, file.originalname);
    }
  });
  
  const uploads = multer({
    storage: storage,
    limits: {
      fileSize: 1024 * 1024 * 5
    },
   
  });

exports.uploads=uploads
