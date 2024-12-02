const express = require('express');
const Player = require('../db/models/player.model')
const router = express.Router();
const { Op } = require('sequelize');
const { paginate } = require('../helpers/index'); //

// router.get('/', (req,res) => {
//     // res.setHeader('content-type','text/html');
//     res.send('<h1> Este es nuestro server </h1>');
// });

router.post('/', (req, res) => {
    const { name, email, password } = req.body;
   
    // res.setHeader('content-type','application/json');
    // res.send(`Los datos que enviaste son: ${name} - ${email} -  ${password}`);
    res.send({name, email, password: "*****"});
});

router.get("/", async (req, res)=>{
    // const { filtro, campo } = req.query;
    const where = { [Op.and]: [] };
    const filtros = req.query.filtros;
    const valores = req.query.valores;
 
    if (!filtros) {
        
    } else {
        for (let i = 0; i < filtros.length; i++) {
            where[Op.and].push( { [filtros[i]]: valores[i] } );
        }
    }    
// ****PAGINACIÓN
    const { page = 1, limit = 10 } = req.query;

    const { count, rows, pages } = await paginate(Player, page, limit, where);

// ****
    // console.log(where);

    // const players = await Player.findAll({ where });

    // res.status(200).json(players);


    res.status(200).json({
        count,
        pages,
        data: rows
    });

});

// app.get('/user/:userId', myMdw, (req,res) => {
//     router.get('/:userId', (req,res) => {
//         const userId = req.params.userId;

//     // res.setHeader('content-type','text/html');
//     // res.send(`<h1>${name} Bienvenido a mi sitio web!</h1>`);
//     // res.setHeader('content-type','application/json');
//     res.send({userId});

// });

// router.get('/', (req,res) => {
//     const { name, email } = req.query;

//     // res.setHeader('content-type','text/html');
//     // res.send(`<h1>${name} Bienvenido a mi sitio web!</h1>`);
//     // res.setHeader('content-type','application/json');
//     res.send({ name, email });

// });

router.put('/:userId', (req,res) => {
    const userId = req.params.userId;
    const { name, email, password } = req.body;
   
    res.send(
        { id: userId, name, email, password: "*****"}
    );

});

router.delete('/:userId', (req,res) => {
    const userId = req.params.userId;
   
    res.send(
        `Adiós usuario: ${userId}`
    );

});

module.exports = router;