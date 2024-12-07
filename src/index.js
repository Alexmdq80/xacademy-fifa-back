require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser'); 
// const PORT = 8080;
const PORT = process.env.PORT;
const { initDb } = require("./db");

const { logging } =  require("./middleware");
const { playerRouter, userRouter } = require("./routes");

const app = express();

app.use(bodyParser.json());
app.use(logging);
app.use('/player', playerRouter);
app.use('/user', userRouter);

app.listen(PORT, async () => {
    await initDb();
    console.log("Backend para jugadores_fifa escuchando peticiones en puerto " + PORT);
}  );

// const myMdw = (req, res, next) => {
//     console.log(`Se hizo un request a la URL: ${req.url}`);
//     // res.setHeader('content-type','application/json');  
//     next(); 
// } 

// app.use(myMdw);

// app.get('/', (req,res) => {
//     // res.setHeader('content-type','text/html');
//     res.send('<h1> Este es nuestro server </h1>');
// });

// app.listen(PORT, () => {
//     console.log("Hola Mundo!, este es mi primer servidor! Escuchando peticiones en puerto " + PORT);
// }  );

// app.post('/user', (req, res) => {
//     const { name, email, password } = req.body;
   
//     // res.setHeader('content-type','application/json');
//     // res.send(`Los datos que enviaste son: ${name} - ${email} -  ${password}`);
//     res.send({name, email, password: "*****"});
// });

// // app.get('/user/:userId', myMdw, (req,res) => {
// app.get('/user/:userId', (req,res) => {
//         const userId = req.params.userId;

//     // res.setHeader('content-type','text/html');
//     // res.send(`<h1>${name} Bienvenido a mi sitio web!</h1>`);
//     // res.setHeader('content-type','application/json');
//     res.send({userId});

// });

// app.get('/user', (req,res) => {
//     const name = req.query.name;

//     // res.setHeader('content-type','text/html');
//     // res.send(`<h1>${name} Bienvenido a mi sitio web!</h1>`);
//     // res.setHeader('content-type','application/json');
//     res.send({ name });

// });

// app.put('/user/:userId', (req,res) => {
//     const userId = req.params.userId;
//     const { name, email, password } = req.body;
   
//     res.send(
//         { id: userId, name, email, password: "*****"}
//     );

// });

// app.delete('/user/:userId', (req,res) => {
//     const userId = req.params.userId;
   
//     res.send(
//         `Adiós usuario: ${userId}`
//     );

// });