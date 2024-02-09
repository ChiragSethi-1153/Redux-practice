require('dotenv').config()

const express = require('express')
const multer = require('multer')
const path = require('path')
const cors = require('cors')
const imageModel= require('./Model/image')

// const upload = multer({
//     storage: multer.diskStorage({
//         destination: (req, file, cb) => {
//            return cb(null, "../users/src/assets")
//         },
//         filename: (req, file, cb) => {
//            return cb(null, `${Date.now()}_${file.originalname}`)
//         }

//     })
// }).single('image');

const upload = multer({
    storage: multer.diskStorage({
        destination: (req, file, cb) => {
           return cb(null, path.join(__dirname, "/uploads/"))
        },
        filename: (req, file, cb) => {
           return cb(null, `${Date.now()}_${file.originalname}`)
        }

    })
}).fields([{name: 'image', maxCount: 1}, {name: 'image2', maxCount: 12}]);

const app = express()

require('./Config/db')

app.use(cors())
app.use(express.json({ extended: true }));
app.use(express.urlencoded({ extended: true }));
app.use("/", require('./Routes'))
// app.use('/uploads',express.static(path.join(__dirname, 'uploads')))

app.post('/upload', upload,  async (req, res) => {
    
    console.log(req.files.image2)
    const image=req.files.image[0].path
    const images=req.files.image2.map((i)=> {return i.path})
    console.log(images)
    await imageModel.create({image: image,image2:images})
    .then(result => res.json(result))
    .catch(err => console.log(err))
  
})


app.get('/image', async (req, res) => {
    try{
       const response = await imageModel.find()
            return res.status(201).json(response)
    }catch(err) {
        console.log(err)
        return err
    }
})



app.listen(process.env.PORT, () => {
    console.log("server connected 8080")
})