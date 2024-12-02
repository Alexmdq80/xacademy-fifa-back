const express = require('express');
const Player = require('../db/models/player.model')
const router = express.Router();
const { Op } = require('sequelize');
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
    // let players;

    // console.log(filtro[0]);
    // console.log(campo[0]);
    // console.log(filtro[1]);
    // console.log(campo[1]);
    // campo[1] = 15;

    // players = await Player.findAll( { where: { [filtro]: campo } } );
    for (let i = 0; i < filtros.length; i++) {
        // switch (filtro[i]) {
        //     case 'long_name':
                where[Op.and].push( { [filtros[i]]: valores[i] } );
        //  where[Op.and].push( { long_name: 'Lionel Andrés Messi Cuccittini' } );
       
                //         break;
        //     case 'fifa_version':
        //         where[Op.and].push({ fifa_version: campo[i] });
        //         break;
        // }
        // if (req.query.fifa_version) {
        //     where.fifa_version = { [Op.and]: req.query.fifa_version };
        // };
    }
    

    // console.log(where);

    const players = await Player.findAll({ where });
    // if (filtros === 'long_name') {
        //  console.log('Filtrado.');
    // players = await Player.findAll( { where: { [filtros[0]]: campos[0] } } );
    
    //  } else if (!filtros) {
    //      console.log('Sin filtro.');
    //      players = await Player.findAll();
    // }
    res.status(200).json(players);
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