const bcrypt = require('bcrypt');
const User = require('../db/models/user.model')

require('dotenv').config();


async function paginate(model, page, limit, where = {}) {
    const offset = (page - 1) * limit;
  
    const { count, rows } = await model.findAndCountAll({
      where,
      limit,
      offset
    });
  
    return {
      count,
      rows,
      pages: Math.ceil(count / limit),
      page
    };
  }

  function convertirAEntero(str) {
    const numero = parseInt(str, 10);
    if (!isNaN(numero)) {
      return numero;
    } else {
      console.error('El valor proporcionado no es un número válido. Se retornará 100 por defecto.');
      return 100; 
    }
  }

  class UserDB {
    static async create( { name, email, password, passwordConfirm} ) {
   
      if (password != passwordConfirm) throw new Error('Las contraseñas no coinciden');

      Validation.username(name);
      Validation.password(password);
      Validation.password(passwordConfirm);


      const SALT_ROUNDS = parseInt(process.env.SALT_ROUNDS);
      const existingUser = await User.findOne({ where: { email } });
      
      if (existingUser) throw new Error("Usuario Existente.");

      const hashedPassword = await bcrypt.hash(password, SALT_ROUNDS);
      const newUser = await User.create({ name, email, password: hashedPassword });
      return newUser.id;

    }

    static async login( { email, password } ) {
  
      Validation.password(password);
      const user = await User.findOne({ where: { email } });
      if (!user) throw new Error('Usuario Inexistente');

      const isValid = await bcrypt.compare(password, user.password);
      
      if (!isValid) throw new Error('Contraseña incorrecta.');

      const { password: _, ...publicUser } = user;

      return {
        "user": publicUser.dataValues.name,
        "email": publicUser.dataValues.email
      };

    }

    static async update( { userId, email, name, oldPassword, newPassword, passwordConfirm} ) {
          
      console.log(newPassword);
      console.log(oldPassword);
      console.log(passwordConfirm);
      if (newPassword != passwordConfirm) throw new Error('Las contraseñas no coinciden');

      Validation.username(name);
      Validation.password(oldPassword);
      Validation.password(newPassword);
        // PARA HACER UNA MODIFICACIÓN DEBE COINCIDIR EL ID CON EL EMAIL
        // Y EL EMAIL NO PUEDE MODIFICARSE.
      const user = await User.findOne({ 
          where: {
                  id: userId,
                  email: email}
                  });
      
      if (!user) throw new Error("Usuario no encontrado.");

      const isValid = await bcrypt.compare(oldPassword, user.password);
      
      if (!isValid) throw new Error('Contraseña incorrecta.');

      const SALT_ROUNDS = parseInt(process.env.SALT_ROUNDS);
      const hashedPassword = await bcrypt.hash(newPassword, SALT_ROUNDS);
      
      const updated = await User.update( { name: name, password: hashedPassword }, {
            where: {id: userId},
            }); 
      return updated;

    }
  }

  class Validation {
            // Hacer una validación para email??
    static username (name) {
      if (typeof name != 'string') throw new Error('El nombre de usuario debe ser una cadena');
      if (name.length < 3) throw new Error('El nombre de usuario debe tener al menos 3 letras');
    }

    static password (password) {
      if (typeof password != 'string') throw new Error('La contraseña debe ser una cadena');
      if (password.length < 6) throw new Error('La contraseña debe ser de al menos 6 caracteres');
    }
  }
  
  module.exports = { paginate, convertirAEntero, UserDB };