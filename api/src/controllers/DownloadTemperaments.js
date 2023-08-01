const axios = require("axios")
const {Temperament} = require("../db.js")
downloadTemp = async ()=>{
    try{

        const dogs = await axios('https://api.thedogapi.com/v1/breeds')
        
        const temperaments = []
        const temperamentsObj = []
        dogs.data.forEach(dog=>{
            if (dog.temperament){

                let currentList = dog.temperament.split(',');
                // console.log (currentList)
                currentList.forEach(word=>{
                    if(!temperaments.includes(word.trim())) {
                        temperaments.push(word.trim())
                        temperamentsObj.push({name : word.trim()})
                    }
                })
            }
        })
        await Temperament.bulkCreate(temperamentsObj)
        //! console.log (dogs.data)
        //! console.log (temperamentsObj)
        return (temperamentsObj)
    } 
    catch (error){
        console.log (error)
        throw (error)
    }
}
module.exports = downloadTemp