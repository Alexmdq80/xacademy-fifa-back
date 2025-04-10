const express = require('express');
const router = express.Router();
const { PlayerDB, convertirAEntero } = require('../helpers/index');

const passport = require('passport');
const passportJWT = require('passport-jwt');
const JWTStrategy = passportJWT.Strategy;
const ExtractJWT = passportJWT.ExtractJwt;
const config = require('dotenv').config();
const fs = require('fs');
const path = require('path');

const SECRET = config.parsed.SECRET_JWK_KEY;

passport.use(new JWTStrategy({
    jwtFromRequest: ExtractJWT.fromAuthHeaderAsBearerToken(), secretOrKey: SECRET}, 
    (jwtPayload, done) => {

        if (!jwtPayload) {
            console.log('Token no válido');
            return done(null, false, { message: 'El token no es válido'});
        }
        // if (usuarioNoExiste) {
        //     return done(null, false, { message: 'El usuario no existe' });
        // }
        // if (passwordIncorrecto) {
        //   return done(null, false, { message: 'Autenticacion invalida' });
        // }

        return done(null, jwtPayload);

}));

router.use(express.json());

// router.post("/", passport.authenticate('jwt', { session: false }), async (req, res)=>{
// //  router.post("/", async (req, res)=>{

//     const { newPlayer } = req.body;

//     // console.log(newPlayer);
//     try {
//         const id = await PlayerDB.create( newPlayer );
//         res.status(201).json({ id: id, player: newPlayer });
//     } catch(error) {
//         // console.log(error);
//         res.status(500).send(error.message);
//     }

// });

router.post("/", async (req, res)=>{
    //  router.post("/", async (req, res)=>{
    
        const { newPlayer } = req.body;
        console.log("paso");
        console.log(newPlayer);
        // console.log(newPlayer);
        try {
            const id = await PlayerDB.create( newPlayer );
            console.log(newPlayer);
            res.status(201).json({ id: id, player: newPlayer });
        } catch(error) {
            // console.log(error);

            res.status(500).send(error.message);
        }
    
    });

// router.get("/", passport.authenticate('jwt', { session: false }), async (req, res)=>{
// router.get("/", async (req, res)=>{

//     const { filtros, valores, archivo } = req.query;
//     const { page = 1, limit = 100 } = req.query;

//     const limite = convertirAEntero(limit);

//     try {

//         const result = await PlayerDB.getFiltro( filtros, valores, page, limite);

//         if (!result) throw new Error('No se encuentran jugadores con ese filtro.');
//         if (!archivo) {

//         } else if (archivo != "csv" && archivo != "xlsx" && archivo != "ambos") {
//             throw new Error('Opción de archivo de salida no válida.')
//         } else {
//             PlayerDB.descargarArchivo(result.data, archivo);
//          }

//         res.status(200).json(result);

//     } catch(error) {
//         res.status(500).send(error.message);
//     }
// });

// ******FILTRO NUEVO CON MIN Y MAX*******/
// router.get("/", async (req, res)=>{
    
//     const { filtros, valores_min, valores_max, archivo } = req.query;
//     const { page = 1, limit = 100 } = req.query;

//     const limite = convertirAEntero(limit);

//     try {
//         // console.log(valores_min[0]);
//         // console.log(valores_max[0]);
//         const result = await PlayerDB.getFiltro( filtros, valores_min, valores_max, page, limite);

//         if (!result) throw new Error('No se encuentran jugadores con ese filtro.');
//         if (!archivo) {

//         } else if (archivo != "csv" && archivo != "xlsx" && archivo != "ambos") {
//             throw new Error('Opción de archivo de salida no válida.')
//         } else {
//             PlayerDB.descargarArchivo(result.data, archivo);
//             }

//         res.status(200).json(result);

//     } catch(error) {
//         res.status(500).send(error.message);
//     }
// });
    
// ******FILTRO NUEVO CON MIN Y MAX*******/

// // ******ORDEN Y FILTRO CON MIN Y MAX*******/
// router.get("/", async (req, res)=>{
    
//     const { sort, direction, filtros, valores_min, valores_max, archivo } = req.query;
//     const { page = 1, limit = 100 } = req.query;

//     const limite = convertirAEntero(limit);

//     try {
//         // console.log(valores_min[0]);
//         // console.log(valores_max[0]);
//         const result = await PlayerDB.get( sort, direction, filtros, valores_min, valores_max, page, limite);

//         if (!result) throw new Error('No se encuentran jugadores con ese filtro.');
//         if (!archivo) {

//         } else if (archivo != "csv" && archivo != "xlsx" && archivo != "ambos") {
//             throw new Error('Opción de archivo de salida no válida.')
//         } else {
//             PlayerDB.descargarArchivo(result.data, archivo);
//             }

//         res.status(200).json(result);

//     } catch(error) {
//         res.status(500).send(error.message);
//     }
// });


// ******ORDEN Y FILTRO CON MIN Y MAX / CON OPCIÓN PARA DESCARGAR EL ARCHIVO*******/
router.get("/", async (req, res)=>{
    
    const { sort, direction, filtros, valores_min, valores_max } = req.query;
    const { page = 1, limit = 100 } = req.query;

    const limite = convertirAEntero(limit);
    
    try {
        // console.log(valores_min[0]);
        // console.log(valores_max[0]);
        const result = await PlayerDB.get( sort, direction, filtros, valores_min, valores_max, page, limite);

        if (!result) throw new Error('No se encuentran jugadores con ese filtro.');
        
        res.status(200).json(result);

    } catch(error) {
        res.status(500).send(error.message);
    }
});

// ******ORDEN Y FILTRO CON MIN Y MAX / CON OPCIÓN PARA DESCARGAR EL ARCHIVO .CSV*******/
router.get("/exportar_csv", async (req, res)=>{
    
    const { sort, direction, filtros, valores_min, valores_max } = req.query;
    const { page = 1, limit = 100 } = req.query;

    const limite = convertirAEntero(limit);

    const nombre = 'data.csv'; 

    try {

        const result = await PlayerDB.get( sort, direction, filtros, valores_min, valores_max, page, limite);

        if (!result) throw new Error('No se encuentran jugadores con ese filtro.');

        try {
            PlayerDB.descargarArchivo(result.data, 'csv');
            const rutaArchivo = path.join('./', nombre); 
            // res.setHeader('Content-Disposition', `attachment; filename="${nombre}"`);
            
            // // res.setHeader('Content-Type', 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet');
            // res.setHeader('Content-Type', 'text/csv');
           
            // const archivoStream = fs.createReadStream(rutaArchivo);
            // archivoStream.pipe(res);
    
            // res.status(200).json(result);
            // console.log(path.resolve(rutaArchivo));
            res.download(rutaArchivo, nombre, (err) => {
                if (err) {
                    console.log('Error downloading file:', err);
                    // Asegúrate de enviar un error al cliente si falla la descarga.
                    res.status(500).send('Error al descargar el archivo.');
                } else {
                    console.log('Descarga completada');
                    // Eliminar el archivo después de la descarga
                    fs.unlink(rutaArchivo, (unlinkErr) => {
                        if (unlinkErr) {
                            console.error('Error al eliminar el archivo:', unlinkErr);
                        }
                    });
                }
            });
        } catch (error) {
            res.status(500).send(error.message);
        }
            
    } catch(error) {
        res.status(500).send(error.message);
    }
});

// ******ORDEN Y FILTRO CON MIN Y MAX / CON OPCIÓN PARA DESCARGAR EL ARCHIVO .XLSX*******/
router.get("/exportar_xlsx", async (req, res)=>{
    
    const { sort, direction, filtros, valores_min, valores_max } = req.query;
    const { page = 1, limit = 100 } = req.query;

    const limite = convertirAEntero(limit);

    const nombre = 'data.xlsx'; 

    try {

        const result = await PlayerDB.get( sort, direction, filtros, valores_min, valores_max, page, limite);

        if (!result) throw new Error('No se encuentran jugadores con ese filtro.');

        try {
            PlayerDB.descargarArchivo(result.data, 'xlsx');
            const rutaArchivo = path.join('./', nombre); 
            // res.setHeader('Content-Disposition', `attachment; filename="${nombre}"`);
            
            // // res.setHeader('Content-Type', 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet');
            // res.setHeader('Content-Type', 'text/csv');
           
            // const archivoStream = fs.createReadStream(rutaArchivo);
            // archivoStream.pipe(res);
    
            // res.status(200).json(result);
            // console.log(path.resolve(rutaArchivo));
            res.download(rutaArchivo, nombre, (err) => {
                if (err) {
                    console.log('Error downloading file:', err);
                    // Asegúrate de enviar un error al cliente si falla la descarga.
                    res.status(500).send('Error al descargar el archivo.');
                } else {
                    console.log('Descarga completada');
                    // Eliminar el archivo después de la descarga
                    fs.unlink(rutaArchivo, (unlinkErr) => {
                        if (unlinkErr) {
                            console.error('Error al eliminar el archivo:', unlinkErr);
                        }
                    });
                }
            });
        } catch (error) {
            res.status(500).send(error.message);
        }
            
    } catch(error) {
        res.status(500).send(error.message);
    }
});


// ******DATOS PARA LA LÍNEA DE TIEMPO*******/
router.get("/linea_tiempo", async (req, res)=>{
    
    const { long_name, atributo } = req.query;
    

    try {
        const result = await PlayerDB.getDataLineaTiempo( long_name, atributo);

        if (!result) throw new Error('No se encuentran datos. Error inesperado.');
    
        res.status(200).json(result);

    } catch(error) {
        res.status(500).send(error.message);
    }
});

// router.get('/:playerId', passport.authenticate('jwt', { session: false }), async (req,res) => {
router.get('/atributos', async (req,res) => { 

    try {
        const atributos = await PlayerDB.getAtributos();
        res.status(200).json( atributos );
    } catch(error) {
        res.status(500).send(error.message);
    }  
    
});

// router.get('/:playerId', passport.authenticate('jwt', { session: false }), async (req,res) => {
router.get('/:playerId', async (req,res) => { 

    const { playerId } = req.params;
    try {
        const player = await PlayerDB.getxID ( playerId );
        res.status(200).json( player );
    } catch(error) {
        res.status(500).send(error.message);
    }  
    
});

// router.put('/:playerId', passport.authenticate('jwt', { session: false }), async (req,res) => {
router.put('/:playerId', async (req,res) => {
    const { playerId } = req.params;
    const playerToUpdate = req.body.playerToUpdate;
   
    try {
        const player = await PlayerDB.update ( playerId, playerToUpdate );
        res.status(200).json( player );
    } catch(error) {
        res.status(error.message === "ID de jugador inexistente." ? 404:500).send(error.message);
    }

});

router.delete('/:playerId', passport.authenticate('jwt', { session: false }), async (req,res) => {
// router.delete('/:playerId', async (req,res) => {

    const playerId = req.params.playerId;
   
    try {
        const player = await PlayerDB.delete ( playerId );
        // console.log(player);
        res.status(201).send(`El jugador ${player.name} fue eliminado`);
    } catch(error) {
        res.status(error.message === "ID de jugador inexistente." ? 404:500).send(error.message);
    }


});


module.exports = router;