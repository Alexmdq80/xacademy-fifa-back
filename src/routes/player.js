const express = require('express');
const Player = require('../db/models/player.model')
const router = express.Router();
const { Op } = require('sequelize');
const { paginate, convertirAEntero } = require('../helpers/index');
const xlsx = require('xlsx');
const { Parser } = require('json2csv');

router.use(express.json());

router.post("/", async (req, res)=>{
    const { newPlayer } = req.body;
    console.log(newPlayer);
    try {
        const newJugador = await Player.create( newPlayer );
        res.status(201).json(newJugador);
    } catch(error) {
        console.log(error.message);
        res.status(500).send('Ocurrió un error: ');
    }
});

router.get("/", async (req, res)=>{
    const { filtros, valores, archivo } = req.query;
    const where = { [Op.and]: [] };
    let fields = [];

    if (!archivo) {

    } else if (archivo != "csv" && archivo != "xlsx" && archivo != "ambos") {
        res.status(400).send('Opción de archivo no válida.');
        return;
    } else {
        const attributes = Player.getAttributes();
        fields = Object.keys(attributes);
    }

    if (!filtros) {

    } else if (filtros.length === valores.length) {
        for (let i = 0; i < filtros.length; i++) {
            where[Op.and].push( { [filtros[i]]: valores[i] } );
        }
    } else {
        res.status(400).send('No coinciden la cantidad de filtros y los valores enviados.');
        return;
    }   
     
// RESPUESTA CON PAGINACIÓN;
    const { page = 1, limit = 100 } = req.query;

// tuve que agregar esta función, porque el parámetro limit me lo pasaba como
// cadena y se rompía 
    let limite = convertirAEntero(limit);

    const { count, rows, pages } = await paginate(Player, page, limite, where);

    if (archivo === "csv" || archivo === "ambos") {
// '*********'
// Campos que deseas incluir en el CSV
        // const data = rows;
        // Crear un objeto Parser con los campos especificados
        const parser = new Parser({ fields });

        // Convertir los datos JSON a CSV
        // const csv = parser.parse(data);

        const csv = parser.parse(rows);
        // Crear un archivo CSV
        const fs = require('fs');
        
        fs.writeFile('data.csv', csv, (err) => {
        if (err) {
            console.error(err);
        } else {
            console.log('Archivo CSV creado exitosamente');
        }
        });
        // res.status(200).send('CSV creado exitosamente.');
    } 


    if (archivo === "xlsx" || archivo === "ambos") {
        const workbook = xlsx.utils.book_new();

        const jugadores = rows.map(jugador => jugador.dataValues);

        let ws = xlsx.utils.json_to_sheet(
            jugadores
        , {header:fields, skipHeader:false});

        // Agregar la hoja al libro de trabajo
        xlsx.utils.book_append_sheet(workbook, ws, 'Data');

        // Escribir el libro de trabajo a un archivo
        try {
            xlsx.writeFile(workbook, 'data.xlsx'); 
            console.log("XLSX creado exitosamente.");
        } catch(error) {
            console.log('Error creando XLSX: ', error);
        }
    }     
    res.status(200).json({
            count,
            pages,
            data: rows
            });

});

// app.get('/player/:playerId', myMdw, (req,res) => {
router.get('/:playerId', async (req,res) => {
    const { playerId } = req.params;

    console.log(playerId);

    Player.findByPk(playerId)
    .then(jugador => {
        if (!jugador) {
          throw new Error("Jugador no encontrado.");
        }
        res.status(200).json(jugador);
    })
    .catch(error => {
        res.status(404).send(error.message);
    });

});

router.put('/:playerId', async (req,res) => {
    const { playerId } = req.params;
    const playerToUpdate = req.body.playerToUpdate;
    
    try {
        const jugador = await Player.findByPk(playerId);
        if (!jugador) {
          throw new Error("Jugador no encontrado.");
        }
        const updated = await Player.update( playerToUpdate, {
            where: {id: playerId},
            }); 
        res.status(201).json(updated);
    } catch(error) {
        res.status(error.message === "Jugador no encontrado." ? 404:500).send(error.message);
    };
});

router.delete('/:playerId', async (req,res) => {
    const playerId = req.params.playerId;

    try {
        const jugador = await Player.findByPk(playerId);
        if (!jugador) {
          throw new Error("Jugador no encontrado.");
        };
        await Player.destroy( { where: { id: playerId } } );
        res.status(201).send(`El jugador ${jugador.long_name} fue eliminado`);

    } catch (error) {
        res
            .status(error.message === "Jugador no encontrado." ? 404:500)
            .send(error.message);
   
    }
});


module.exports = router;