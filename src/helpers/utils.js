// async function paginate(model, page, limit, where = {}) {
//     const offset = (page - 1) * limit;
  
//     const { count, rows } = await model.findAndCountAll({
//       where,
//       limit,
//       offset
//     });
  
//     return {
//       count,
//       rows,
//       pages: Math.ceil(count / limit),
//       page
//     };
//   }

  function convertirAEntero(str) {
    const numero = parseInt(str, 10);
    if (!isNaN(numero)) {
      return numero;
    } else {
      console.error('El valor proporcionado no es un número válido. Se retornará 100 por defecto.');
      return 100; 
    }
  }

  async function paginate(model, page, limit, where = {}, order = []) {
// le quité el -1 a page- Así que acepto que la página sea 0
    const offset = page * limit;
  
    const { count, rows } = await model.findAndCountAll({
      order,
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
 
  module.exports = { paginate, convertirAEntero };

  