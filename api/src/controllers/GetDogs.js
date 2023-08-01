const axios = require ('axios')

const GetDogs = async ()=>{
    try{
        const list = await axios('https://api.thedogapi.com/v1/breeds');
        return (list.data)
    }
    catch (error){
        console.log(error.message)
        throw (error.message)
    }
}

module.exports = GetDogs