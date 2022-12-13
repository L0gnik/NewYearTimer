import express from "express";
import { fileURLToPath } from 'url';
import { dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const PORT = '5000'
const app = express();


try {
    app.get('/', (req, res) => {

        res.sendFile(__dirname + '/client/index.html')
    
    })
} catch (error) {
    console.log(error);
}

app.listen(PORT, () => console.log("SERVER START"));