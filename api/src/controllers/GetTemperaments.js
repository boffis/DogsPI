const {Temperament} = require("../db")
const GetTemperaments = async ()=>{
    try{
        const list = await Temperament.findAll()
        return (list)
    }
    catch (error) {
        console.log(error)
    }
}
module.exports = GetTemperaments