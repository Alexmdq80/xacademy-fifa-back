require('dotenv').config();

const { Sequelize } = require('sequelize');

const dbPassword = process.env.DB_PASSWORD;
const dbUser = process.env.DB_USER;


const sequelize = new Sequelize('jugadores_fifa', dbUser, dbPassword, {
    dialect: "mysql",
    host: "localhost",   
});

const initDb = async () => {
    try {
        await sequelize.authenticate();
        await sequelize.sync({force: false});
    } catch (error) {
        console.log(error);
    }
}


module.exports = { sequelize, initDb };
