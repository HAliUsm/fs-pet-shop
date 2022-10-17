'use strict '
const express = require('express');
const { Client } = require('pg');
// const pgClient = require('pg');
// const Client = pgClient.Client;
const connectionString = 'postgres://postgres:postgrespw@localhost:49153/pet_shop';

const client = new Client({
    connectionString: connectionString,
});

client.connect();
// console.log(client)

const app = express();
app.use(express.json());
const PORT = 8000

app.get('/', (req, res) => {
    res.send('Hello World1');
})


app.get('/pets', (req, res) => {
    console.log('are you working?');
    try{
        client.query('SELECT * FROM pet_list')
        // .then(result => res.sendStatus(418).json(result.rows))
        .then(result => res.send(result.rows))
        .then(result => console.log(result.pet_name))
    } catch(error){
        console.error(error);
    }
    });
app.post('/pets', (req, res) => {
        console.log(req)
        // .then(result => res.sendStatus(418).json(result.rows))
         client.query(`INSERT INTO pet_list (pet_name, age, kind) VALUES ('${req.body.pet_name}', ${req.body.age}, '${req.body.kind}')`)
        .then(result => res.send(result.rows))
})


app.get('/pets/:id', (req, res) => {
    const id = req.params.id
    client.query('SELECT * FROM pet_list WHERE id = $1', [id])
        .then(result => res.send(result.rows))

})

app.patch('/pets/:id', (req, res) => {
    const id = req.params.id;
    const name = req.body.pet_name;
        client.query('UPDATE pet_list SET pet_name =$1 WHERE id = $2', [name, id])
        .then(result => res.send(result.rows))
})


app.delete('/pets/:id', (req, res)=> {
    var toDelete = req.params.id;
    try{
        client.query( `DELETE FROM pet_list WHERE id=${toDelete}`)
        .then(result=> res.send(result.rows),res.status(404))
    }catch(err){
        console.log(err)
    }
})
app.listen(PORT, () => {
    console.log(`app is running on ${PORT}`)

}) 