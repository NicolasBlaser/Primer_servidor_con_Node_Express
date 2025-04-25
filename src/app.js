import express from "express";
import Time from "./time.js"
const app = express();

const port= 3000;

app.get('/', (req,res) => {
    res.send('Bienvenido');
})

app.get('/fecha-completa',(req,res) =>{
    res.send(Time.fechaCompleta())
})

app.get('/hora',(req,res) =>{
    res.send(Time.hora())
})


export default app;