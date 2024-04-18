import express from "express"
import path, { dirname } from "path"
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const app = express();
const PORT = 3000;
app.use(express.static(path.join(__dirname, 'public')))

app.listen(PORT, () => {
    console.log(`Server listening at port ${3000}`)
})

app.get("/", (req, res) => {
    res.render("index.html")
})

app.get('/java', (req, res) => {
    res.render("java.html")
})

app.get('/javascript', (req, res) => {
    res.render("javascript.html")
})

app.get('/ordenacao', (req, res) => {
    res.render("ordenacao.html");
})

app.get('/fibonacci', (req, res) => {
    res.render("fibonacci.html")
})

app.get('/contagem', (req, res) => {
    res.render("contagem.html")
})

app.get('/soma', (req, res) => {
    res.render("soma.html")
})

app.get('/primo', (req, res) => {
    res.render("primo.html")
})

app.get('/mdc', (req, res) => {
    res.render("mdc.html")
})