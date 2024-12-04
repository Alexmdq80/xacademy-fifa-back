const express = require('express');
const Player = require('../db/models/player.model')
const router = express.Router();
const { Op } = require('sequelize');
const { paginate } = require('../helpers/index');
// const xlsx = require('xlsx');
const { Parser } = require('json2csv');



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
    const { filtros, valores, archivo } = req.query;
    const where = { [Op.and]: [] };
    let fields = [];

    if (!archivo) {

    } else if (archivo != "csv" && archivo != "xlsx") {
        res.status(400).send('Opción de archivo no válida.');
        return;
    } else {

        const attributes = Player.getAttributes();
        fields = Object.keys(attributes);
        
        // .then(attributes => {
        //     // Extraer los nombres de las columnas
        //     fields = Object.keys(attributes);
        //     console.log(fields); // Imprimirá ['firstName', 'lastName', 'email']
        // });


        // getAttributes()
        // .then(attributes => {
        //     // Extraer los nombres de las columnas
        //     fields = Object.keys(attributes);
        //     console.log(fields);
        //     // console.log(fields); // Imprimirá ['firstName', 'lastName', 'email']
        // });
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
    // const { page = 1, limit = 100 } = req.query;
    const { page = 1 } = req.query;

    const str =  req.query.limit;
    const limit = +str;
    console.log(limit);    

    const { count, rows, pages } = await paginate(Player, page, limit, where);

    if (archivo === "csv") {
// '*********'
// Campos que deseas incluir en el CSV
        const data = rows;
        // Crear un objeto Parser con los campos especificados
        const parser = new Parser({ fields });

        // Convertir los datos JSON a CSV
        const csv = parser.parse(data);

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
      
    res.status(200).json({
            count,
            pages,
            data: rows
            });
    
        // Suponiendo que tienes un array de objetos llamado 'data' proveniente de tu JSON
    // console.log(rows);
    // // Crear un nuevo libro de trabajo
    // const workbook = xlsx.utils.book_new();

    // // Convertir los datos a un formato que xlsx pueda entender
    // const worksheetData = xlsx.utils.json_to_sheet(rows);

    // // Agregar la hoja al libro de trabajo
    // xlsx.utils.book_append_sheet(workbook, worksheetData, 'Data');

    // // Escribir el libro de trabajo a un archivo
    // xlsx.writeFile(workbook, 'data.xlsx'); 

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

// async function getAttributes() {
//     const attributes = await Player.getAttributes();
   
//     // console.log(attributes);

//     return attributes;
// }


module.exports = router;