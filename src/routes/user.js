const express = require('express');
const router = express.Router();
const { UserDB } = require('../helpers/index');
const jwt = require('jsonwebtoken');
const { body, matchedData, validationResult } = require('express-validator');

// can be reused by many routes
const validate = validations => {
  return async (req, res, next) => {
    // sequential processing, stops running validations chain if one fails.
    for (const validation of validations) {
      const result = await validation.run(req);
      if (!result.isEmpty()) {
        return res.status(400).json({ errors: result.array() });
      }
    }

    next();
  };
};


require('dotenv').config();

router.use(express.json());

router.post("/register", validate([
    body('name').isAlpha(),
    body('email').isEmail(),
    body('password').isLength({ min: 6 })
  ]) ,async (req, res)=>{
    const { name, email, passwordConfirm } = req.body;
    
    const { password } = matchedData(req);

    if (password) {
        await body('passwordConfirm')
        .equals(password)
        .withMessage('passwords do not match')
        .run(req);
    }

    const errors = validationResult(req);
    
    if (!errors.isEmpty()) {
      console.log(errors.array()); // Log all errors
      return res.status(400).json({ errors: errors.array() });
    }

    try {
        const id = await UserDB.create({ name, email, password, passwordConfirm})
        if (id === null) {
            throw new Error("Usuario Existente");
        }
        res.status(201).send({ id });
    } catch(error) {
        console.log(error);
        res.status(500).send(error.message);
    }
});

router.post("/login", async (req, res)=>{

    const SECRET = process.env.SECRET_JWK_KEY;
    const { email, password } = req.body;
    console.log(req.body);
    try {
        const user = await UserDB.login({ email, password})

        console.log('Usuario login: ', user);

        const payload = { name: user.name, email: user.email };

        const token = jwt.sign(payload, SECRET, { expiresIn: '1h' });

        res.status(200).send({ user, token });

        // res
        //     .cookie('access_token', token, {
        //         httpOnly: true,
        //         secure: false,
        //         sameSite: 'strict',
        //         maxAge: 1000 * 60 * 60
        //     }) 
        //     .status(200).send({ user, token });

    } catch(error) {
        console.log(error);
        res.status(401).send(error.message);
    }
    
});

// app.get('/player/:playerId', myMdw, (req,res) => {
router.get('/logout', async (req,res) => {

});

router.put('/:userId', async (req,res) => {
    const { userId } = req.params;
    const { name, email, oldPassword, newPassword, passwordConfirm } = req.body;
    
    try {

        const updated = await UserDB.update({ userId, name, email, oldPassword, newPassword, passwordConfirm })

        res.status(201).json(updated);

    } catch(error) {
        res.status(error.message === "Usuario no encontrado." ? 404:500).send(error.message);
    };
});

router.delete('/:userId', async (req,res) => {
    const { userId } = req.params;
    const { email, password } = req.body;
    let mensaje;

    // PODRÍA AGREGAR SOLICITAR LA CONTRASEÑA...
    try {
       
        const deleted = await UserDB.delete({ userId, email, password })

        // res.status(201).json(deleted);   
        // const user = await User.findByPk(userId);
        // if (!user) {
        //   throw new Error("Usuario no encontrado.");
        // };
        // await User.destroy( { where: { id: userId } } );
        console.log(deleted);

        res.status(201).send(`El usuario ${deleted.name} fue eliminado`);

    } catch (error) {
        let codigo;
        switch (error.message) {
            case 'Usuario no encontrado.': 
                mensaje = error.message;
                codigo = 500;
                break;
            
            case 'Contraseña incorrecta.':
                mensaje = error.message;
                codigo = 404;
                break;
            default:
                mensaje = 'Error inesperado.';
                codigo = 500;
                break;
        }
        
        res
            // .status(error.message === "Usuario no encontrado." ? 404:500)
            .status(codigo)
            .send(mensaje);
            // .send(error.message);
   
    }

});


module.exports = router;