const { Router } = require('express');
const dogRouter = require('./dogRouter.js');
const GetTemperaments = require("../controllers/GetTemperaments")
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');


const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);

router.use('/dogs', dogRouter)

router.get ('/temperaments', async (req,res)=>{
    try{
        const temperaments = await GetTemperaments()
        console.log (temperaments)
        res.status(200).send(temperaments)
    } catch(error){
        res.status(400).send({error})
    }
})


module.exports = router;
