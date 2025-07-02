import express from "express";
import path from "path";

const app = express();
import { fileURLToPath } from 'url';
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

app.set('view engine', 'hbs');
app.set('views', path.join(__dirname,'views'));
app.use(express.static(path.join(__dirname, 'public')));


app.get('/',(req,res)=>{
    res.render('index', {user:'dgmmind'})
});
app.get('/home',(req,res)=>{
    res.render('home', {user:'dgmmind'})
});
const PORT = 30003;

app.listen(PORT,()=>{
    console.log(`Server activo en: http://localhost:${PORT}`);
})