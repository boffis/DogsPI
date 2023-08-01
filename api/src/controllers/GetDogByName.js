const axios = require ('axios')
const {Dog, Temperament} = require ('../db.js')
const { Op } = require('sequelize')

const GetDogByName = async (name)=>{
    try{

        let finalList = []
        let apiList = []
        let DBList = []

        apiList= await axios(`https://api.thedogapi.com/v1/breeds/search?q=${name}`)
        apiList = apiList.data
        // console.log ("data done")
        // console.log (apiList)
        console.log (Temperament)
        DBList = await Dog.findAll({
            where:{
                name:{[Op.iLike]:`%${name}%`}
            },
            include: Temperament
        })
        console.log(DBList)
        finalList = [...DBList,...apiList]
        
        return(finalList)
    }
    catch (error){
        console.log (error.message)
        throw (error.message)
    }
}

module.exports = GetDogByName