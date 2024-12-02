

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

  module.exports = { paginate };