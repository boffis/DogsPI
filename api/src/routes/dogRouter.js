const { Router } = require("express");
const dogRouter = Router()

const PostDog = require('../controllers/PostDog.js')
const GetDogs = require('../controllers/GetDogs.js')
const GetDogsByName = require('../controllers/GetDogByName.js')
const GetDogById = require('../controllers/GetDogById.js')

dogRouter.post('/', async (req, res) =>{
    try{
        await PostDog(req)
        res.status(200).send("Done")
        return
    }
    catch (error){
        res.status(400).send(error)
    }
})

dogRouter.get('/', async (req, res) =>{
    try{
        const list = await GetDogs()
        res.status(200).send(list)
        return

    }
    catch (error){
        res.status(400).send(error)
    }
})


dogRouter.get('/name', async (req, res) =>{
    try{
        const {name} = req.query
        //! console.log(name)
        const list = await GetDogsByName(name)
        res.status(200).send(list)
        return
    }
    catch (error){
        res.status(400).send(error)
    }
})

dogRouter.get(`/:id`, async (req, res) =>{
    try{
        console.log ('inside')
        const {id} = req.params
        // console.log (id)
        const final = await GetDogById(id)
        // console.log (`out`)
        res.status(200).send(final)
        return
    }
    catch (error){
        console.log (error)
        res.status(400).send(error)
    }
})

module.exports = dogRouter