const express = require('express');
const User = require('../db/models/user.model')
const router = express.Router();
const { UserDB } = require('../helpers/index');

router.use(express.json());

router.post("/register", async (req, res)=>{
    const { name, email, password, passwordConfirm } = req.body;
    console.log(req.body);
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
    const { email, password } = req.body;
    console.log(req.body);
    try {
        const user = await UserDB.login({ email, password})
        // if (user === null) throw new Error('Error de usuario y/o contraseña');
        res.status(200).send({ user });

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