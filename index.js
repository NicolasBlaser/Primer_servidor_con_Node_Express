import express from "express";
import app from "./src/app.js"

const port= 3000;

app.listen(port, () => {
    console.log(`listening on http://localhost:${port}`)
})