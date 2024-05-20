const express =require("express");
const bodyparser = require("body-parser");

const app = express();
const port = 6000;

app.use(bodyparser.json());

app.get("/",(req,res) => {
    res.send('<h1>Welcome</h1>');
    console.log("this api works")
});
app.post('/api/add',(req,res)=> {
    const {num1, num2}  = req.body;
    const result = num1 + num2;
    res.json({result});
});
app.post('/api/multiply',(req,res)=> {
    const {num1, num2}  = req.body;
    const result = num1 * num2;
    res.json({result});
});
app.post('/api/sub',(req,res)=> {
    const {num1, num2}  = req.body;
    const result = num1 - num2;
    res.json({result});
});

app.post('/api/divide',(req,res)=> {
    const {num1, num2}  = req.body;
    const result = num1 / num2;
    res.json({result});
});
app.post('/api/student',(req,res)=> {
    const {name, age}  = req.body;
    const result = `${name}  ${age}`;
    res.json({result});
});

app.listen(port,()=> {
    console.log(`server is listening on port ${port}`);
});


