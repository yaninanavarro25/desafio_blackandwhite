import express from 'express';
import routes from './routes/routes.js';
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.static("assets"));

app.use (express.json())

app.use(express.urlencoded({ extended: true }));

app.use("/", routes)

app.listen(PORT, () => {
    console.log(`servidor corriendo en el puerto http://localhost:${PORT}`);
});