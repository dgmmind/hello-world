import express from "express";

const server = express();

server.get('/',(req,res)=>{
    res.send('¡Hola mundo desde Express!')
});
const PORT = 30003;

server.listen(PORT,()=>{
    console.log(`Server activo en: http://localhost:${PORT}`);
})