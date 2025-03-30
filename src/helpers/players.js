const Player = require('../db/models/player.model')
const { Op } = require('sequelize');
const { paginate } = require('./utils');
const xlsx = require('xlsx');
const { Parser } = require('json2csv');

class PlayerDB {
    static async create( newPlayer ) {
        
        try {
            const player = await Player.create( newPlayer );
            return player.id;
        } catch(error) {
            throw new Error(error.message);  
        }

    }
    
    // static async getFiltro( filtros, valores, pagina, limite ) {

    //    const where = { [Op.and]: [] };

    //     if (!filtros) {

    //     } else if (filtros.length === valores.length) {
    //         for (let i = 0; i < filtros.length; i++) {
    //             where[Op.and].push( { [filtros[i]]: valores[i] } );
    //         }
    //     } else {
    //         throw new Error('No coinciden la cantidad de filtros y los valores enviados.');
    //     }   

    //     const { count, rows, pages } = await paginate(Player, pagina, limite, where);

    //     const result = {
    //         count,
    //         pages,
    //         data: rows
    //     }
    //     return result; 

    // }
    static async get( sort, direction, filtros, valores_min, valores_max, pagina, limite ) {

        const where = { [Op.and]: [] };
        let order = [];

         if (!filtros) {
 
         } else if (filtros.length === valores_min.length) {
             for (let i = 0; i < filtros.length; i++) {
                console.log(valores_max[i]);
                if (valores_max[i] === 'null') {
          
                    const atributo = Player.attributeTypes[filtros[i]];
                  
                    console.log(atributo.type);
                    if (atributo.type === 'string') {
                        where[Op.and].push( { 
                            [filtros[i]]: { 
                                [Op.like]: '%' + valores_min[i] + '%'
                             } } );
                    
                        // where[Op.like].push( { [filtros[i]]: '%' + valores_min[i] + '%' } );
                    } else {
                        where[Op.and].push( { [filtros[i]]: valores_min[i] } );
                    }

                } else {
                    where[Op.and].push( { 
                        [filtros[i]]: { 
                            [Op.between]: [valores_min[i], valores_max[i]]
                         } } );
                    
                } 
             }
         } else {
             throw new Error('No coinciden la cantidad de filtros y los valores enviados.');
         }    

         if (!sort) {
     
         } else if (sort.length === direction.length) {
             for (let i = 0; i < sort.length; i++) {
                 order.push([sort[i], direction[i]]);
             }  
         } else {
            throw new Error('No coinciden la cantidad de campos de orden y sentido.');
        }   
            

         const { count, rows, pages } = await paginate(Player, pagina, limite, where, order);
 
         const result = {
             count,
             pages,
             data: rows
         }
         return result; 
 
     }

    //  ****************************LINEA DE TIEMPO**********
     static async getDataLineaTiempo( long_name, atributo ) {
        console.log(long_name);
        try {
            const datos = await Player.findAll({
              where: { long_name: long_name }, // Especifica el nombre del jugador
              attributes: ['fifa_version', 'fifa_update', atributo], // Especifica la columna que deseas obtener
               order: [['fifa_version', 'ASC'],['fifa_update', 'ASC']]
            });
            
            if (datos) {
                // función de ordenar, para no tener que modificar la estructura de la BD
                // lo cual sería más práctico
                 // Ordenar los datos en JavaScript
                datos.sort((a, b) => {
                    // Función de comparación para ordenar versiones
                    const compareVersions = (versionA, versionB) => {
                    const partsA = versionA.split('.').map(Number);
                    const partsB = versionB.split('.').map(Number);
            
                    for (let i = 0; i < Math.max(partsA.length, partsB.length); i++) {
                        const partA = partsA[i] || 0;
                        const partB = partsB[i] || 0;
            
                        if (partA !== partB) {
                        return partA - partB;
                        }
                    }
            
                    return 0; // Son iguales
                    };
            
                    let result = compareVersions(a.fifa_version, b.fifa_version);
                    if (result === 0) {
                    result = compareVersions(a.fifa_update, b.fifa_update);
                    }
                    return result;
                });
            
                return datos;

                // console.log(datos);
                return datos; // Devuelve solo el valor de la columna 'nombre'
            } else {
                return null; // O algún otro valor para indicar que no se encontró el usuario
            }
        } catch (error) {
           console.error('Error al obtener los datos para la linea de tiempo:', error);
            return null; // O lanza el error si prefieres
        }
       
     }


    // static async getFiltro( filtros, valores_min, valores_max, pagina, limite ) {

    //     const where = { [Op.and]: [] };
 
    //      if (!filtros) {
 
    //      } else if (filtros.length === valores_min.length) {
    //          for (let i = 0; i < filtros.length; i++) {
    //             if (valores_max[i] == 0) {
          
    //                 const atributo = Player.attributeTypes[filtros[i]];
                  
    //                 console.log(atributo.type);
    //                 if (atributo.type === 'string') {
    //                     where[Op.and].push( { 
    //                         [filtros[i]]: { 
    //                             [Op.like]: '%' + valores_min[i] + '%'
    //                          } } );
                    
    //                     // where[Op.like].push( { [filtros[i]]: '%' + valores_min[i] + '%' } );
    //                 } else {
    //                     where[Op.and].push( { [filtros[i]]: valores_min[i] } );
    //                 }

    //             } else {
    //                 where[Op.and].push( { 
    //                     [filtros[i]]: { 
    //                         [Op.between]: [valores_min[i], valores_max[i]]
    //                      } } );
                    
    //             } 
    //          }
    //      } else {
    //          throw new Error('No coinciden la cantidad de filtros y los valores enviados.');
    //      }   
 
    //      const { count, rows, pages } = await paginate(Player, pagina, limite, where);
 
    //      const result = {
    //          count,
    //          pages,
    //          data: rows
    //      }
    //      return result; 
 
    //  }
 

    static async getxID( playerId ) {
  
        try {
            const player = await Player.findByPk(playerId);
    

            if (!player) throw new Error("ID de jugador inexistente.");
         
            const playerArray = [player];

            return playerArray;
            // return player;

        } catch(error) {
            throw new Error(error.message);  
        }

    }

    static async getAtributos( ) {
  
        try {
            // const attributes = await Player.getAttributes();

            // if (!attributes) throw new Error("Error leyendo atributos de Player.");
            
// Función para extraer los campos y sus tipos
            // const fieldsAndTypes = [];
            // for (const field in attributes) {
            //     if (attributes.hasOwnProperty(field)) {
            //         fieldsAndTypes.push({
            //             atributo: field,
            //             tipo: attributes[field].type
            //           });
            //     }
            // }


            // console.log(fieldsAndTypes);
            
            // return fieldsAndTypes;
            const atributos = Player.getAttributes();

            const playerAttributes = Object.keys(Player.attributeTypes).map(key => ({
                name: key,
                type: Player.attributeTypes[key].type,
                viewName: Player.attributeTypes[key].viewName,
                required: !atributos[key].allowNull,
                contenido: Player.attributeTypes[key].contenido,
                // sugerencia: atributos[key].allowNull? null: Player.attributeTypes[key].sugerencia,
                group: Player.attributeTypes[key].group,
                // esSkill: Player.attributeTypes[key].esSkill,
                // esNombre: Player.attributeTypes[key].esNombre,
                minVal: Player.attributeTypes[key].minVal,
                maxVal: Player.attributeTypes[key].maxVal,
                minLen: Player.attributeTypes[key].minLen,
                maxLen: Player.attributeTypes[key].maxLen,
            }));
            
            // for (const propiedad in playerAttributes.type) {
            //     playerAttributes[propiedad] = playerAttributes.type[propiedad];
            //   }

            // delete playerAttributes.type;
            //  console.log(playerAttributes); 

            return playerAttributes;

        } catch(error) {
            throw new Error(error.message);  
        }

    }

     static async update( playerId, playerToUpdate ) {

        try {
            
            const player = await this.getxID(playerId);
            // const player = await Player.findByPk(playerId);
            // if (!player) throw new Error("Jugador no encontrado.");
            
            const updated = await Player.update( playerToUpdate, {
                where: {id: playerId},
                }); 

            return { updated, player };

        } catch(error) {
            throw new Error(error.message);  
        }
     }

    static async delete( playerId ) {
      
        try {
            const player = await this.getxID(playerId);
       
            const deleted = await Player.destroy( { where: { id: playerId } } );
            
            // console.log(player.dataValues);

            return { deleted, name: player.dataValues.long_name  }; 
        
        } catch (error) {
            throw new Error(error.message);        
        }
    }
    
    static descargarArchivo(data, tipo) {  
        const attributes = Player.getAttributes();
        const fields = Object.keys(attributes);

        const nombreArchivo = 'data'; // O listado.csv
        // const rutaArchivo = path.join(__dirname, nombreArchivo); // Ajusta la ruta


        if (tipo === "csv" || tipo === "ambos") {
             // Campos que deseas incluir en el CSV
            // Crear un objeto Parser con los campos especificados
            const parser = new Parser({ fields });

            // Convertir los datos JSON a CSV
            // const csv = parser.parse(data);

            const csv = parser.parse(data);
            // Crear un archivo CSV
            const fs = require('fs');
            
            fs.writeFile(nombreArchivo + '.csv', csv, (err) => {
            if (err) {
                console.error(err);
            } else {
                console.log('Archivo CSV creado exitosamente');
            }
            });
        } 

        if (tipo === "xlsx" || tipo === "ambos") {
            const workbook = xlsx.utils.book_new();

            const jugadores = data.map(jugador => jugador.dataValues);

            let ws = xlsx.utils.json_to_sheet(
                jugadores
            , {header:fields, skipHeader:false});

            // Agregar la hoja al libro de trabajo
            xlsx.utils.book_append_sheet(workbook, ws, 'Data');

            // Escribir el libro de trabajo a un archivo
            try {
                xlsx.writeFile(workbook, nombreArchivo + '.xlsx'); 
                console.log("XLSX creado exitosamente.");
            } catch(error) {
                console.log('Error creando XLSX: ', error);
            }
        }          
    }
}

module.exports = PlayerDB;