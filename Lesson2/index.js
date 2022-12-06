const express = require("express");
const app = express();
const PORT = 3000;

/* app.get('/', (req,res) => {
    // const id = req.query.id;
    // const name = req.query.name;
    const {id, name} = req.query;
    res.send(`<h1>Student id is : ${id} & name : ${name}</h1>`);
    res.end;
}) */

// app.get('/userId/:id/userAge/:age', (req, res) => {
//     const {id, age} = req.params;
//     res.send(`<h1>Student id is : ${id} & age : ${age}</h1>`);
//     res.end;
// })

app.get('/', (req, res) => {
    const id = req.header('id');
    const name = req.header('name');
    res.send(`<h1>Student id is : ${id} & name : ${name}</h1>`);
})

app.listen(PORT, () => {
    console.log(`Your server is running at http://localhost:${PORT}`);
})