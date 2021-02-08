import express from 'express';

const app = express();

const add = (a: number, b: number) => {
    return a + b;
}

app.get('/', (req, res) => {
    add(1,2);
    res.send("Hello World!");
})

app.listen(3000, () => {
    console.log("Server RUNING 127.0.0.1:3000");
})