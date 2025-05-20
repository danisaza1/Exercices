const express = require("express");
const app = express();
const port = 3001;

const tasks = [
    {category : "Hy", message : "Apprendre JS", completed : true},
    {category : "Hy", message : "Apprendre next", completed : false},
    {category : "Ho", message : "Apprendre express", completed : false},
    {category : "Ho", message : "Apprendre Python", completed : true},

]

    
app.get('/', (req, res) => {
    res.send('Hello world!');
});

app.get('/tasks', (req, res) => {
  res.send(tasks);
});

app.listen(port, () => {
  console.log(`Listening on http://localhost:${port}`)
})
