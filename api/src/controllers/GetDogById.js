const axios = require ('axios')
const {Dog, Temperament} = require ('../db.js')

const GetDogById = async (id)=>{
    try{
        let theDog = ""
        if (isNaN(id)){
            theDog = await Dog.findOne({where:{id:id}, include:Temperament})
        }
        else {
            intId = parseInt(id)
            let array = await axios('https://api.thedogapi.com/v1/breeds')
            array = array.data
            array.forEach( dog => {
                if (dog.id === intId) theDog = dog;
            })
        }
        // console.log (theDog)
        return(theDog)
    }
    catch (error){
        console.log (error.message)
        throw (error.message)
    }
}
module.exports = GetDogById