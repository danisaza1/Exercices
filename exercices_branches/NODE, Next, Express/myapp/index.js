const express = require("express");
const app = express();
const port = 3001;

const tasks = [
    {category : "Hy", message : "Apprendre JS", completed : true},
    {category : "Hy", message : "Apprendre next", completed : false},
    {category : "Ho", message : "Apprendre express", completed : false},
    {category : "Ho", message : "Apprendre Python", completed : true},
]

let utilisateurs = [
  { id: 1, nom: 'Alice' },
  { id: 2, nom: 'Bob' }
];

    
app.get('/', (req, res) => {
  res.send('Hello world!');
});

app.get('/tasks', (req, res) => {
  res.send(tasks);
});

app.get('/utilisateurs', (req, res) => {
  res.send(utilisateurs);
});

app.post('/api/utilisateurs', (req, res) => {
  const { nom } = req.body;
  const newUser = { id: Date.now(), nom };
  utilisateurs.push(newUser);
  res.status(201).json(newUser);
});



app.listen(port, () => {
  console.log(`Listening on http://localhost:${port}`)
})
