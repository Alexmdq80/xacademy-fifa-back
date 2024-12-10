const logingMdw = (req, res, next) => {
    console.log(`Se hizo un request a la URL: ${req.url}`);
    // res.setHeader('content-type','application/json');  
    next(); 
} 

module.exports = logingMdw;
