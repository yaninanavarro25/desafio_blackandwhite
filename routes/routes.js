import express from 'express';
import path from 'path';
import Jimp from 'jimp';
import { v4 as uuidv4 } from 'uuid';
const __dirname = path.resolve();
const router = express.Router();


router.get('/', (req, res) => {
    res.sendFile(__dirname + "/views/index.html")
})

router.post("/editar/", async(req, res) => {
    const imagen = req.body
    const id = uuidv4().slice(-6)
    const nombreimagen = `${id}.jpg`
    const img = await Jimp.read(imagen)
    await img 
    .resize( 350, Jimp.AUTO )
    .grayscale()
    .writeAsync(__dirname + `/assets/upload/${nombreimagen}`)
    .res.sendFile(__dirname + `/assets/upload/${nombreimagen}`)

})

export default router;