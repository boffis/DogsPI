const axios = require ("axios")
const { Dog, Temperament } = require ("../db.js")
PostDog = async (req)=>{
    try{

        const {name,image, height, weight, lifeExpectancy, temperament} = req.body
        theDog = await Dog.create({name,image,height,weight,lifeExpectancy})
        console.log(temperament)
        let temperamentArray = []
        for (const temper of temperament) {
            const temperModel = await Temperament.findOne({where:{name:temper}})
            console.log(temper);
            console.log(temperModel);
            temperamentArray.push (temperModel)
        };

        console.log([...temperamentArray, "head"])
        await theDog.addTemperaments (temperamentArray)
        
    }
    catch (error) {
        console.log(error.message)
        throw(error.message)
    }
        
}

module.exports= PostDog